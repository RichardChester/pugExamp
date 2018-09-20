var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require('rename');

gulp.task('html',function () {
    gulp.src('pug/*.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('build'))
});

gulp.task('watch',function () {
    gulp.watch('pug/*.pug',['html'])
});
