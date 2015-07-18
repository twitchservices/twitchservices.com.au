var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  gulp.src('./views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['templates']);