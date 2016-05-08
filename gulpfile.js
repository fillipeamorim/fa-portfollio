var gulp = require('gulp'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    gulpWatch = require('gulp-watch'),
    browserSync = require('browser-sync');

gulp.task('jade', function() {
  return gulp.src('./src/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./src/'))
});

// BrowserSync Task (Live reload)
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './src/'
    }
  })
});

gulp.task('watch', ['browserSync'], function () {
   //gulp.watch('./src/scss/**/*', ['sass']);
   gulp.watch('./src/*.jade', ['jade']);
   gulp.watch('./src/*.html').on('change', browserSync.reload);
});

// Gulp Default Task
gulp.task('default', ['watch']);
