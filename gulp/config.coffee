webpack = require('webpack')

dest   = './dist/'
src    = './dev/'
common = 'common/'

module.exports =
	pug:
		src :[
            src + '**/*.pug',
            '!' + src + '**/' + common + '**/*.pug'
		]
		dest : dest
		opt :
			pretty : true
	style:
		src : [
            src + '**/*.scss',
            '!' + src + '**/' + common + '**/*.scss'
		]
		dest : dest
		autoprefixer_opt :
			browsers : ['last 100 versions']
		cmq_opt:
			log : false
	concat :
		lib : [
			src + common + 'js/jquery321.min.js',
			src + common + 'js/TweenMax.min.js'
		]
		filename : 'lib.js'
		dest : dest + common + 'js/'
	webpack :
		src : src + '**/js/**'
		dest : dest
		entry :
			'js/index' : src + 'js/index.js'
		output :
			publicPath : dest
			filename : '[name].js'
		resolve :
			extensions : [
				'', '.js', '.coffee', '.html'
			]
		module :
			loaders : [
				{
					test : /\.js$/
					exclude : /node_modules/
					loader : 'babel-loader'
					query : {
						cacheDirectory : true
						presets : ['es2015']
					}
				}
			]
	watch :
		pass :
			pug     : src + '**/*.pug'
			pug_tmp : src + '**/' + common + 'pug/*.pug'
			style   : src + '**/**/*.scss'
			webpack : src + '**/js/**/*.js'