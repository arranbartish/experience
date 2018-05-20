const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

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
  devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [
    // must be first entry to properly set public path
    'babel-polyfill',
    './src/webpack-public-path',
    'react-hot-loader/patch',
    // 'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: PATH.STATIC + '/bundle.js'
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: 'test',
      suppressSuccess: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
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
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
          failOnWarning: false,
          fix: !process.env.LINT_FIX
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      },
      {test: /\.(jpe?g|png|gif|svg|eot|woff(2)?|ttf)$/i, loader: 'file-loader?name=' + PATH.STATIC + '/[name]-[hash].[ext]'},
      {
        test: /(\.css|\.scss|\.sass)$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3001
  }
};
