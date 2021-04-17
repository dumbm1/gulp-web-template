const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
// ERR_REQUIRE_ESM ??? WTF ???
// const htmlValidator = require('gulp-w3c-html-validator');

module.exports = function pug2html(cb) {
  return gulp.src('src/pages/*.pug')
             .pipe(plumber())
             .pipe(pug())
             // .pipe(htmlValidator()) // ERR_REQUIRE_ESM ??? WTF ???
             .pipe(gulp.dest('build'));
};