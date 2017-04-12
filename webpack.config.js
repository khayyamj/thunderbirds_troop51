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
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
        // ,
        // query: {
        //   presets: ['react', 'es2015', 'stage-1']
        // }
     },
     {
       test: /\.css$/,
       exclude: /node_modules/,
       use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: "css-loader",
         publicPath: "/dist"
       })
     },
     {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","sass-loader"],
          publicPath: "/dist"
        })
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
          disable: false,
          allChunks: true
        })
   ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    // contentBase: './'
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: "errors-only",
    open: true,
    port: 3000
  }
};
