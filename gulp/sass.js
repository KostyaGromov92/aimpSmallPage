/**
 * Created by KostyaGromov on 15.08.2017.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var cfg = require('../package.json').config;
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var runSeq = require('run-sequence');

gulp.task('sass', function () {
    return gulp.src(cfg.src.sass +'/**/*.{scss,sass}')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest(cfg.build.css));
});

gulp.task('sass:watch', function () {
    gulp.watch(cfg.src.sass +'/**/*.*', () => runSeq('copy','sass','inject'));
});