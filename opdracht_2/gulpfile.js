var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('watch', function () {
    gulp.watch('style/style.scss', ['sass']);
})

gulp.task('sass', function(){
    return gulp.src('style/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})