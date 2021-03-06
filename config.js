var path = require('path');

var dist = './public';
var src = './src';
var relativeSrcPath = path.relative('.', src);
var relativeDestPath = path.relative('.', dist);

module.exports = {

  scss: {
    src: src + '/scss/**/*.scss',
    dest: dist + '/css',
  },

  js: {
    src: src + '/js/**',
    dest: dist + '/js',
  },

  webpack: {
    entry: {
      app: src + '/js/app.js'
    },
    output: {
      path: __dirname + '/public/js',
      filename: "[name].js"
    },
    module: {
      loaders: [
        { test: /\.vue$/, loader: 'vue' },
        { test: /\.html$/, loader: 'html-loader' },
        { test: /\.js$/, exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//, loader: 'babel' }
      ]
    },
    babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
    }
  }
};
