/**
 * Created by KostyaGromov on 15.08.2017.
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "build/"
        },
        files: ['build/*.html','build/*.css','build/img/*.*']
    });
});