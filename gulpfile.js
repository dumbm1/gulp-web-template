const gulp = require('gulp');

const clean = require('./gulp/tasks/clean');
const serve = require('./gulp/tasks/serve');
const pug2html = require('./gulp/tasks/pug2html');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const favicon = require('./gulp/tasks/favicon');

const fonts = require('./gulp/tasks/fonts');
const imgMin = require('./gulp/tasks/imgMin');

const ghPages = require('./gulp/tasks/ghPages');

module.exports.default = gulp.series(clean, pug2html, styles,
                                     scripts, fonts, imgMin, favicon,
                                     serve);

module.exports.gh = gulp.series(ghPages);