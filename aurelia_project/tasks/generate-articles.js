import gulp from 'gulp';
import path from 'path';
import through from 'through2';
import changedInPlace from 'gulp-changed-in-place';
import showdown from 'showdown';
import project from '../aurelia.json';

function markdownToArticles() {
    let pages = [];
    let latestFile;
    // Ensure line breaks are replaced by <br/> to prevent showdown from replacing them
    let converter = new showdown.Converter({extensions: [{
        type: 'lang',
        regex: /\n{2,}/g,
        replace: function(match, offset) {
            let lineBreaks = match.split(/\n/).length - 1;
            return offset ? '\n' + '%LB%'.repeat(lineBreaks) + '\n' : '';
        }
    }, {
        type: 'output',
        filter: text => {
            return text.replace(/%LB%/g, '</br>');
        }
    }]});

    return through.obj(function(file, encoding, done) {
        if (!file.contents.length) {
            return done();
        }
        let fileContent = file.contents.toString();
        // Use folder name as category and file name as page name
        let [path, category, name] = file.path.match(/.*\/(.*)\/(.*)\.[a-zA-Z0-9]+$/);
        // Use the h1 markdown heading as page title (e.g. # Some page title)
        let [heading, title] = fileContent.match(/^#\s+(.*)\n*/m);
        // Find all h2 markdown headings (e.g. ## some text) and get the text from it
        let headings = (fileContent.match(/^##\s+(.*)$/mg) || []).map(title => title.replace(/^##\s+/, ''));
        // Cut off the page title because it's rendered explicitly
        let html = converter.makeHtml(fileContent.replace(heading, ''));

        pages.push({name, category, title, html, headings});

        latestFile = file;

        done();
    }, function(done) {
        if (!latestFile) {
            return done();
        }

        let json = JSON.stringify(pages, null, 4);
        let fileContent = `export default ${json}`;

        let file = latestFile.clone({contents: false});
        file.path = path.join(latestFile.base, 'articles.js');
        file.contents = new Buffer(fileContent.toString('binary'), 'binary');

        this.push(file);

        done(null);
    });
}

export default function generateArticles() {
    return gulp.src(project.documentation.source)
        .pipe(changedInPlace({firstPass: true}))
        .pipe(markdownToArticles())
        .pipe(gulp.dest(project.paths.appRoot))
}
