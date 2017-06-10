gulp = require 'gulp'
handleErrors = require './handleErrors'
config = require '../config'
$ = do require 'gulp-load-plugins'

gulp.task 'pug', ->
	gulp.src config.pug.src
	.pipe $.cached('pug')
	.pipe $.pug(config.pug.opt)
	.on 'error', handleErrors
	.pipe gulp.dest(config.pug.dest)


gulp.task 'pug_tmp', ->
	gulp.src config.pug.src
	.pipe $.pug(config.pug.opt)
	.on 'error', handleErrors
	.pipe gulp.dest(config.pug.dest)
