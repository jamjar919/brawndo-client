const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

process.traceDeprecation = true;

const config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        include: APP_DIR,
        use: 'eslint-loader'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          }, {
            loader: 'sass-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }]
        })
      }
    ]
  },
  devServer: {
    contentBase: APP_DIR + '/public',
    inline: true,
    stats: 'errors-only'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: APP_DIR + '/public/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('style.css'),
  ]
};

module.exports = config;
