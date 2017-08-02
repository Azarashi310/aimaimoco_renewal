webpack = require('webpack')

dest = './dist/'
src = './dev/'
common = 'common/'

module.exports =
  pug:
    src: [
      src + '**/*.pug',
      '!' + src + '**/' + common + '**/*.pug'
    ]
    dest: dest
    opt:
      pretty: true
  style:
    src: [
      src + '**/*.scss',
      '!' + src + '**/' + common + '**/*.scss'
    ]
    dest: dest
    autoprefixer_opt:
      browsers: ['last 100 versions']
    cmq_opt:
      log: false
  concat:
    lib: [
      src + common + 'js/lib/jquery210.js',
      src + common + 'js/lib/TweenMax.min.js'
    ]
    filename: 'lib.js'
    dest: dest + common + 'js/'
  webpack:
    src: src + '**/js/**'
    dest: dest
    entry:
      'common/js/common': src + 'common/js/common.js'
      'js/index': src + 'js/index.js'
      'news/js/index': src + 'news/js/index.js'
      'about/js/index': src + 'about/js/index.js'
    output:
      publicPath: dest
      filename: '[name].js'
    resolve:
      extensions: [
        '', '.js', '.coffee', '.html'
      ]
    module:
      noParse: [
        /node_modules\/ajv\/dist\/ajv.bundle.js/
      ]
      loaders: [
        {
          test: /\.js$/
          exclude: /node_modules/
          loader: 'babel-loader'
          query: {
            cacheDirectory: true
            presets: ['es2015']
          }
        }
        {
          test: /\.json$/
          loader: "json-loader"
        }
      ]
    node: {
      console: true
      fs: 'empty'
      net: 'empty'
      tls: 'empty'
      target: 'node'
    }
  watch:
    pass:
      pug: src + '**/*.pug'
      pug_tmp: src + '**/' + common + '**/*.pug'
      style: src + '**/**/*.scss'
      webpack: src + '**/js/**/*.js'