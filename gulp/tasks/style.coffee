gulp         = require 'gulp'
$            = do require 'gulp-load-plugins'
handleErrors = require './handleErrors'
config       = require '../config'

gulp.task 'style', ->
    $.rubySass(config.style.src,
        sourcemap: true
        noCache: true
        compass: true
    )
    .pipe($.cached('style'))
    .pipe($.autoprefixer(config.style.autoprefixer_opt))
    .pipe(gulp.dest(config.style.dest))
