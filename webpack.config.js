var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  // entry: APP_DIR + '/index.js',
  entry: [
    'webpack-dev-server/client?http://localhost:5050',
    'webpack/hot/dev-server',
    APP_DIR + '/index.js'
  ],
  // output: {
  //   path: BUILD_DIR,
  //   filename: 'bundle.js'
  // },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
   resolve: {
    extensions: ['', '.js']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;