const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "jshint-loader"
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
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
        }),
        new HtmlWebpackPlugin({
          title: 'Troop 51 Thunderbirds',
          hash: true,
          template: 'index.html', // Load a custom template
        }),
        new UglifyJSPlugin({
          sourceMap: true
        }),
        new ExtractTextPlugin({
          filename: "bundle.css",
          disable: false,
          allChunks: true
        })
   ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
