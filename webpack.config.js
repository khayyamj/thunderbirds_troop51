const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: [
     '#source-map'
 ],
  module: {
    preloaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'jshint-loader'
      }
    ],
   loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
   },
   {
     test: /\.css$/,
     exclude: /node_modules/,
     loader: "style-loader!css-loader"
   },
   {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: "style-loader!css-loader!sass-loader"
   },
   ]
  },
  plugins: [
        new BrowserSyncPlugin({
           host: 'localhost',
           port: 3000,
           proxy: 'http://localhost:8080/'
        })
   ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
