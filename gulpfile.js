
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('Sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('Sass/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);