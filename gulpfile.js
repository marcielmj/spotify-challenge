const gulp = require('gulp')
const browserSync = require('browser-sync')
const concat = require('gulp-concat')
const del = require('del')

const server =  browserSync.create()

const path = {
  lib: {
    js: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js'
    ],
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ],
    fonts: [
      'node_modules/bootstrap/dist/fonts/**'
    ]
  },
  src: {
    js: [
      'src/js/app.js',
      'src/js/spotify-api.service.js',
      'src/js/route.config.js',

      'src/js/artist-list.controller.js',
      'src/js/album-list.controller.js',
      'src/js/track-list.controller.js'
    ],
    css: 'src/css/style.css',
    index: 'src/index.html',
    templates: 'src/templates/*.html'
  }
}

gulp.task('clean', () => del('dist'))

gulp.task('lib:js', () => gulp.src(path.lib.js)
  .pipe(gulp.dest('dist/lib/js'))
)

gulp.task('lib:css', () => gulp.src(path.lib.css)
  .pipe(gulp.dest('dist/lib/css'))
)

gulp.task('lib:fonts', () => gulp.src(path.lib.fonts)
  .pipe(gulp.dest('dist/lib/fonts'))
)

gulp.task('lib', gulp.series('lib:js', 'lib:css', 'lib:fonts'))

gulp.task('js', () => gulp.src(path.src.js)
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('dist/js'))
)

gulp.task('css', () => gulp.src(path.src.css)
  .pipe(gulp.dest('dist/css'))
)

gulp.task('index', () => gulp.src(path.src.index)
  .pipe(gulp.dest('dist/'))
)

gulp.task('templates', () => gulp.src(path.src.templates)
  .pipe(gulp.dest('dist/templates'))
)

gulp.task('build', gulp.series('lib', 'js', 'css', 'index', 'templates'))

gulp.task('reload', done => {
  server.reload()
  done()
})

gulp.task('serve', done => {
  server.init({
    server: {
      baseDir: 'dist/'
    }
  })
  done()
})

gulp.task('watch', () => {
  return gulp.watch('src', gulp.series('build', 'reload'))
})

gulp.task('default', gulp.series('clean', 'build', 'serve', 'watch'))
