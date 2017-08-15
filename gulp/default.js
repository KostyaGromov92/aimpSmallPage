/**
 * Created by KostyaGromov on 15.08.2017.
 */
var gulp = require('gulp');
var runSeq = require('run-sequence');

gulp.task('default', function () {
    runSeq(
        'copy',
        'sass',
        'server',
        'copy:watch',
        'sass:watch'
    );
});