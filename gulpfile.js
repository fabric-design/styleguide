'use strict';

// modules
var assemble = require('fabricator-assemble');
var browserSync = require('browser-sync');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');
var replace = require('gulp-replace-task');
var sassJspm = require('sass-jspm-importer');
var fs = require("fs");
var clone = require('gulp-clone');
var jspm = require('gulp-jspm-build');



//theo
var theo = require('theo');
var transform = theo.plugins.transform;
var format = theo.plugins.format;


// configuration
var config = {
	dev: gutil.env.dev,
	src: {
		scripts: {
			fabricator: './src/assets/fabricator/scripts/fabricator.js',
			toolkit: './src/assets/toolkit/scripts/toolkit.js',
			jspm: './jspm_packages'
		},
		styles: {
			fabricator: 'src/assets/fabricator/styles/fabricator.scss',
			toolkit: 'src/assets/toolkit/styles'
		},
		icons: 'src/assets/icons/**/*',
		images: 'src/assets/toolkit/images/**/*',
		views: 'src/toolkit/views/*.html',
		tokens: {
			tokenFolder: "./tokens",
			entryFile: "/raw/main.yml",
			tmpTokenFolder: "./.tmp/tokens"
		}

},
	dest: 'dist',
    dest_scss: 'dist_scss'
};


// webpack
var webpackConfig = require('./webpack.config')(config);
var webpackCompiler = webpack(webpackConfig);


// clean
gulp.task('clean', function (cb) {
	del([config.dest + '/**/*.[js,html,css,ico]'], cb);
});


// styles
gulp.task('styles:fabricator', function () {
	return gulp.src(config.src.styles.fabricator)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(rename('f.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest + '/assets/fabricator/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('styles:copy_tokens', function () {
    return gulp.src(config.src.tokens.tokenFolder + '/web')
    .pipe(gulp.dest(config.src.styles.toolkit));
});

gulp.task('styles:toolkit', ['quark', 'styles:copy_tokens'], function () {
	var cssFiles = gulp.src(config.src.styles.toolkit + '/toolkit.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			functions: sassJspm.resolve_function('/jspm_packages/'),
			importer: sassJspm.importer
		}).on('error', sass.logError))
		.pipe(prefix('last 1 version'));

	cssFiles.pipe(clone())
		.pipe(rename('toolkit.css'))
		.pipe(gulp.dest(config.dest))
		.pipe(reload({stream:true}));

	return cssFiles.pipe(csso())
		.pipe(rename('toolkit.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest))
		.pipe(reload({stream:true}));
});

gulp.task('styles:toolkit_provide', ['quark', 'styles:copy_tokens'], function () {
	return gulp.src(config.src.styles.toolkit + '/**/*.scss')
		.pipe(gulp.dest(config.dest_scss));
});

gulp.task('styles', ['styles:fabricator', 'styles:toolkit']);

// scripts
gulp.task('jspm', function () {
	gulp.src(['config.js','src/app.js'])
		.pipe(gulp.dest(config.dest));
});
gulp.task('scripts', function (done) {
	webpackCompiler.run(function (error, result) {
		if (error) {
			gutil.log(gutil.colors.red(error));
		}
		result = result.toJson();
		if (result.errors.length) {
			result.errors.forEach(function (error) {
				gutil.log(gutil.colors.red(error));
			});
		}
		done();
	});
});


// images
gulp.task('images', ['favicon'], function () {
	return gulp.src(config.src.images)
		.pipe(imagemin())
		.pipe(gulp.dest(config.dest + '/assets/toolkit/images'));
});

gulp.task('favicon', function () {
	return gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.dest));
});

gulp.task('icons', function () {
	return gulp.src('**/*', {
		cwd: 'src/assets/icons'
	})
	.pipe(gulp.dest(config.dest + '/assets/icons'));
});

gulp.task('quark', ['tokens'], function() {
    console.log('fabricator token transforming from quark');
    var quark_tokens = JSON.parse(fs.readFileSync(config.dest + "/tokens/styleguide/quark.json"));

    //create the pattern matching array
    var patterns = [];
    for(var token in quark_tokens) {
        patterns.push({
            match: token,
            replacement: quark_tokens[token]
        });
    }

    return gulp.src('./tokens/*.yml')
        .pipe(replace({
            patterns: patterns
        }))
        .pipe(gulp.dest('./src/data'));
});

gulp.task('tokens:scss', function() {
    gutil.log("Building SCSS-File");
    return gulp.src(config.src.tokens.tokenFolder + "/" + config.src.tokens.entryFile)
		.on('error', function(err) {
			gutil.log(gutil.colors.red("Error:"), err);
		})
		.pipe(transform('web'))
		.pipe(format('scss'))
		.pipe(rename('quark.scss'))
		.pipe(gulp.dest(config.dest + '/tokens/web'));
});
gulp.task('tokens:json', function() {
	gutil.log("Building Styleguide-Token-File");
	return gulp.src(config.src.tokens.tokenFolder + "/" + config.src.tokens.entryFile)
		.on('error', function(err) {
			gutil.log(gutil.colors.red("Error:"), err);
		})
		.pipe(transform('web'))
		.pipe(format('json'))
		.pipe(rename('quark.json'))
		.pipe(gulp.dest(config.dest + '/tokens/styleguide'));
});
gulp.task('tokens', ['tokens:scss','tokens:json']);


// assemble
gulp.task('assemble', function (done) {
	assemble({
		logErrors: config.dev
	});
	done();
});

gulp.task('jspm', function(){
	gutil.log("Bundling jspm dependencies");

	jspm({
		bundleSfx: true,
		bundles: [
			{ src: './src/app', dst: 'app.js' }
		]
	})
	.pipe(gulp.dest(config.dest));
});


// server
gulp.task('serve', function () {

	browserSync({
		server: {
			baseDir: config.dest
		},
		notify: false,
		logPrefix: 'FABRICATOR'
	});

	/**
	 * Because webpackCompiler.watch() isn't being used
	 * manually remove the changed file path from the cache
	 */
	function webpackCache(e) {
		var keys = Object.keys(webpackConfig.cache);
		var key, matchedKey;
		for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
			key = keys[keyIndex];
			if (key.indexOf(e.path) !== -1) {
				matchedKey = key;
				break;
			}
		}
		if (matchedKey) {
			delete webpackConfig.cache[matchedKey];
		}
	}

	gulp.task('assemble:watch', ['assemble'], reload);
	gulp.watch('src/**/*.{html,md,json,yml}', ['assemble:watch']);

	gulp.task('styles:fabricator:watch', ['styles:fabricator']);
	gulp.watch('src/assets/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

	gulp.task('styles:toolkit:watch', ['styles:toolkit']);
	gulp.watch('src/assets/toolkit/styles/**/*.scss', ['styles:toolkit:watch']);

	gulp.task('scripts:watch', ['scripts'], reload);
	gulp.watch('src/assets/{fabricator,toolkit}/scripts/**/*.js', ['scripts:watch']).on('change', webpackCache);

	// gulp.task('jspm:watch', ['jspm'], reload);
	// gulp.watch(['jspm_packages/**/*','config.js','app.js'], ['jspm:watch']);

	gulp.task('images:watch', ['images'], reload);
	gulp.watch(config.src.images, ['images:watch']);

	gulp.task('icons:watch', ['icons'], reload);
	gulp.watch(config.src.icons, ['icons:watch']);
});

gulp.task('provide_scss', ['styles:toolkit_provide']);

gulp.task('build', ['jspm','default']);
// default build task
gulp.task('default', ['clean'], function () {

	// define build tasks
	var tasks = [
		'tokens',
		'styles',
		'scripts',
		'icons',
		'images',
		'quark',
		'assemble'
	];

	// run build
	runSequence(tasks, function () {
	    gutil.log("Build complete");

		if (config.dev) {
			gulp.start('serve');
		}
	});

});
