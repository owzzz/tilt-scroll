'use strict';

const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const CONSTS = require('./constants');

const watchSass = gulp.watch(CONSTS.CSS_SRC, ['sass']);
const watchScripts = gulp.watch(CONSTS.JS_SRC, ['scripts']);
const watchTemplates = gulp.watch(CONSTS.SRC + '**/*.html', ['copyTemplates']);
const watchImages = gulp.watch(CONSTS.SRC + '**/*.html', ['copyFiles']);

[watchImages, watchSass, watchScripts, watchTemplates].forEach((w) => {
    w.on('change', (e) => {
        gulpUtil.log(e.path, e.type);
    });
});
