var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');


gulp.task('gulp-clean-css', function(){
  return gulp.src('/home/khalildh/djangoProjects/reactDjango/music/static/css/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('/home/khalildh/djangoProjects/reactDjango/music/static/build/css/'))
});


gulp.task('uglify', function(){
  return gulp.src('/home/khalildh/djangoProjects/reactDjango/music/static/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('/home/khalildh/djangoProjects/reactDjango/music/static/build/js/'))
});

gulp.task('minify', ['gulp-clean-css', 'uglify']);
