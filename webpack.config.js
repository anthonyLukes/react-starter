var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders : [
        {
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel'
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style', // The backup style loader
                'css?sourceMap!sass?sourceMap'
            )
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};

module.exports = config;