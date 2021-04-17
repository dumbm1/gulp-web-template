const gulp = require('gulp');
// const sass = require('gulp-sass'); // bug with convert rgb-colors
const dartSass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');

module.exports = function styles() {
  return gulp.src('src/styles/*.scss')
             .pipe(dartSass())
             .pipe(autoprefixer({cascade: false}))
             .pipe(gulp.dest('build/css'));
};