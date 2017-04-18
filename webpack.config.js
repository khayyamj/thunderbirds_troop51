const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var isProd = process.env.NODE_ENV === "production"; // true or false
var cssDev = ['style-loader','css-loader','sass-loader'];
var cssProd = ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: ["css-loader", "sass-loader"],
      publicPath: "/dist"
    });
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    // publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   enforce: "pre",
      //   loader: "jshint-loader"
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?images/name=[name].[ext]&outputPath=images/'
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015','react','stage-2']
        }
     },
     {
       test: /\.(scss|css)$/i,
       use: cssConfig
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
          template: './index.html', // Load a custom template
        }),
        // new UglifyJSPlugin({
        //   sourceMap: true
        // }),
        new ExtractTextPlugin({
          filename: "bundle.css",
          disable: !isProd,
          // allChunks: true // not included in other file
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin()
   ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true, // not included in other file
    // contentBase: './'
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // hot: true,
    stats: "errors-only",
    open: true,
    port: 3000
  }
};
