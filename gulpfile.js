var gulp = require('gulp');
var express = require('express');
var server = express();


gulp.task('serve', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});