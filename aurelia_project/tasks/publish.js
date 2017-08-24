import fs from 'fs';
import path from 'path';
import cp from 'child_process';
import gulp from 'gulp';
import del from 'del';
import globby from 'globby';
import project from '../aurelia.json';
import {CLIOptions} from 'aurelia-cli';

/**
 * Helper function to execute git commands on shell
 * @param {Array<String>} args List of command line arguments
 * @return {Promise}
 */
function git(...args) {
    return new Promise((resolve, reject) => {
        let output = '';
        let error = '';
        const git = cp.spawn('git', args);
        git.stdout.on('data', data => output += data);
        git.stderr.on('data', data => error += data);

        git.on('close', code => {
            if (code !== 0) {
                reject(error);
            }
            else {
                resolve(output)
            }
        });
    });
}

/**
 * Recursively create the folder structure mentioned in the target path.
 * @param {String} target Path to any target where the folders has to be created
 * @param {Number} mode Unix file mode
 */
function recursiveMkdir(target, mode) {
    const targetFolder = path.dirname(target);
    // We need the / prefix for absolute paths
    const prefix = targetFolder.startsWith(path.sep) ? path.sep : '';
    // Iterate through all folders from root to create them if they doesn't exist
    targetFolder.split(path.sep).reduce((currentPath, folderName) => {
        const folderPath = path.join(prefix, currentPath, folderName);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, mode);
        }
        return folderPath;
    }, '');
}

/**
 * Copy a list of files to a target folder. The file list can be specified using glob's.
 * For more information about the possible glob's see https://github.com/isaacs/node-glob
 * @param {Array<String>|String} files List of file globs
 * @param {String} target Path to target folder
 * @return {Promise}
 */
function copy(files, target) {
    return globby(files, {nodir: true, cwd: process.cwd()})
        .then(filePaths => filePaths.map(filePath => new Promise((resolve, reject) => {
            const sourcePath = path.join(process.cwd(), filePath);
            const targetPath = path.join(process.cwd(), target, filePath);
            // Ensure the target folder for this file exist
            recursiveMkdir(targetPath, 0o755);
            // Create stream to read file
            const read = fs.createReadStream(sourcePath);
            read.on('error', error => {
                console.error(`Could not read file ${filePath}`);
                reject(error);
            });
            // Create stream to write file to new destination
            const write = fs.createWriteStream(targetPath);
            write.on('error', error => {
                console.error(`Could not write file '${filePath}' to '${target}'`);
                reject(error);
            });
            write.on('close', resolve);

            read.pipe(write);
        })))
        .then(promises => Promise.all(promises));
}

/**
 * Pushes the changes inside the temporary folder to the target remote branch
 * @return {Promise}
 */
async function updateBranch() {
    const originLocation = process.cwd();
    const commit = CLIOptions.hasFlag('commit') ? CLIOptions.getFlagValue('commit') : '';
    const repo = CLIOptions.hasFlag('repo') ? CLIOptions.getFlagValue('repo') : '';
    const message = `${project.publish.commitMsg} ${repo || 'CLI'}${commit ? '#' + commit : ''}`;
    // Switch location to temporary folder
    process.chdir(path.join(process.cwd(), project.publish.tempFolder));
    console.log(`Pushing into target branch: '${message}'`);
    // Push target branch
    await git('add', '.');
    await git('commit', '-m', message);
    await git('push', 'origin', project.publish.targetBranch);
    // Go back to original location for following processes
    process.chdir(originLocation);
}

/**
 * Deletes the temporary folder
 */
function cleanup() {
    console.info('Deleting temporary folder');
    return del(project.publish.tempFolder);
}

/**
 * Prepares the new data to push to the target branch
 * @return {Promise}
 */
async function prepare() {
    // Replace wrapping quotes since this is not done on empty values from CLI tool
    const targetFolder = (CLIOptions.getFlagValue('target') || project.publish.targetFolder).replace(/^"|"$/g, '');
    const projectUrl = await git('config', '--get', 'remote.origin.url');

    console.info('Cloning repository');
    await git('clone', projectUrl.trim(), project.publish.tempFolder, '-b', project.publish.targetBranch);

    console.info('Cleaning old deployment');
    del.sync([path.join(project.publish.tempFolder, targetFolder, '*')]);

    console.info(`Copy new data to '${targetFolder}'`);
    await copy(project.publish.sources, path.join(project.publish.tempFolder, targetFolder));
}

export default gulp.series(
    cleanup,
    prepare,
    updateBranch,
    cleanup
);
