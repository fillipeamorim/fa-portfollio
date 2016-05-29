var jade         = require('jade'),
    browserSync  = require('browser-sync');
    runSequence  = require('run-sequence');
    gulp         = require('gulp'),
    gulpLess         = require('gulp-less'),
    imagemin     = require('gulp-imagemin'),
    cache        = require('gulp-cache'),
    uglify       = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    inlinesource = require('gulp-inline-source'),
    watch        = require('gulp-watch'),
    notify       = require('gulp-notify'),
    gulpJade     = require('gulp-jade'),
    gulpWatch    = require('gulp-watch'),

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
   gulp.watch('./src/**/*.jade', ['jade']);
   gulp.watch('./src/**/*.html').on('change', browserSync.reload);
   gulp.watch('./src/css/**/*.css').on('change', browserSync.reload);
});

// Gulp Default Task
gulp.task('default', ['watch']);
