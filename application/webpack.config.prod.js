import WebpackMd5Hash from "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

const PATH = {
  STATIC: 'static',
  ASSETS: './assets'
};

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: [
      path.resolve('./node_modules'),
    ]
  },
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: PATH.STATIC + '/[name].[chunkhash].js'
  },
  plugins: [
    new WebpackMd5Hash(),

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin(PATH.STATIC + '/[name].[contenthash].css'),

    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: '!!raw-loader!src/index.ejs',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),

    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')]
        },
        context: '/',
        postcss: () => [autoprefixer],
      }
    }),
    new FaviconsWebpackPlugin({
      logo: PATH.ASSETS + '/favicon.png',
      prefix: PATH.STATIC + '/icons-[hash]/',
      inject: true,
      background: '#fff',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      },
      { test: /\.(jpe?g|png|gif|svg|eot|woff(2)?|ttf)$/i, loader: 'file-loader?name=' + PATH.STATIC + '/[name]-[hash].[ext]'},
      { test: /.+config\.json$/, loader: 'file-loader?name=' + PATH.STATIC + '/[name].[ext]'},
      { test: /(\.css|\.scss|\.sass)$/, loader: ExtractTextPlugin.extract('css-loader?postcss-loader!sass-loader') }
    ]
  }
};
