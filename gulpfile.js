/**
 * Created by jessepinuelas on 5/13/16.
 */

'use strict';

var gulp        = require('gulp');
var args        = require('yargs').argv;
var plugins     = require('gulp-load-plugins')();


/**
 * Bump major, minor, patch, version in package JSON
 * --type=pre   - pre-release version for example will be 0.1.1-beta
 * --type=patch - version when you make backwards-compatible bug fixes e.g. 0.0.1
 * --type=minor - version when you add functionality in a backwards-compatible manner 0.1.1
 * --type=major - version when you make incompatible API changes 1.0.0
 * --version=   - 1.0.0 will bump to a specific version and ignores other flags
 */
gulp.task('bump', function(){
    var type    = args.type;
    var version = args.version;
    var options = {};

    if(version){
        options.version = version;
    }

    else {
        options.type = type;
    }

    return gulp
        .src(['./package.json', './bower.json'])
        .pipe(plugins.bump(options))
        .pipe(gulp.dest('./'));
});
