var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('serve', () => {
  browserSync.init({
    server: './'
  })
  // gulp.watch('css/main.css').on('change', reload)
  gulp.watch('index.html').on('change', reload)
  gulp.watch('js/app.js').on('change', reload)
	gulp.watch('js/instafeed.min.js').on('change', reload)
})