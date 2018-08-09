var gulp                  = require('gulp'),
    stylus                = require('gulp-stylus'),
    clean                 = require('gulp-clean'),
    concatCss             = require('gulp-concat-css');

//img
gulp.task('img', function () {
  return gulp.src('src/img/**')
  .pipe(gulp.dest('dist/img'));
})

//html 
gulp.task('html', function () {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('dist/'));
})

//js
gulp.task('js', function () {
  return gulp.src('src/js/**')
  .pipe(gulp.dest('dist/js'));
})

//css
gulp.task('one', function () {
  return gulp.src('src/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('src/css/build'));
});

gulp.task('con', function () {
  return gulp.src('src/css/build/style.css')
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('cong', function () {
  return gulp.src('src/css/build/gallery.css')
    .pipe(concatCss("gallery.css"))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('conc', function () {
  return gulp.src('src/css/build/catalog.css')
    .pipe(concatCss("catalog.css"))
    .pipe(gulp.dest('dist/css'));
});

//  clean
gulp.task('clal', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

//  default
gulp.task('css', ['one'], function() {
  return gulp.start('conc', 'con');
});
gulp.task('start', ['html', 'js', 'img', 'css']);

//  watch
gulp.task('watch', function () {
    gulp.watch('src/css/**', ['css'])
    gulp.watch('src/js/**',['js'])
    gulp.watch('src/*.html',['html'])
    gulp.watch('src/img/**',['img'])
});