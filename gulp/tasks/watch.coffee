gulp   = require 'gulp'
$      = do require 'gulp-load-plugins'
config = require '../config'

gulp.task 'watch', ->
    $.watch(config.watch.pass.pug, ->
        gulp.run('pug')
    )
    $.watch(config.watch.pass.pug_tmp, ->
        gulp.run('pug_tmp')
    )
    $.watch(config.watch.pass.webpack, ->
        gulp.run('webpack')
    )
    $.watch(config.watch.pass.style, ->
        gulp.run('style')
    )