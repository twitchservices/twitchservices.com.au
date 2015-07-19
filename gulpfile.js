var gulp = require('gulp');
var jade = require('gulp-jade');

var templatePath = './views/*.jade';

gulp.task('templates', function() {
  gulp.src(templatePath)
    .pipe(jade())
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch(templatePath, ['templates']);
});

gulp.task('default', ['templates']);