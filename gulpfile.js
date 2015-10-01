var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');

gulp.task('scss', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['scss']);
});


gulp.task('default', ['scss']);
