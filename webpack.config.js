var webpack = require('webpack');
var path = require('path');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

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
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/src/client/public'
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
    new webpack.NoErrorsPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
      // logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true
    })
  ]
};

module.exports = config;