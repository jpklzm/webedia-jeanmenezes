const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;
const buildDirectory = path.join(__dirname, './build');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = env => {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      inject: true,
      production: isProd,
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      children: true,
      minChunks: 2,
    }),
    new ExtractTextPlugin('style-[contenthash:8].css'),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    new PreloadWebpackPlugin(),
  ];

  if (isProd) {
    plugins.push(
      new UglifyJSPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
      }),
      new OfflinePlugin()
    );
  }

  return {
    devServer: {
      inline: true,
      host,
      port,
      historyApiFallback: true,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    resolve: {
      alias: {
        react: isProd ? 'preact-compat' : 'react',
        'react-dom': isProd ? 'preact-compat' : 'react-dom',
      },
    },
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
      path: buildDirectory,
      publicPath: '/',
      filename: '[name]-[hash:8].js',
      chunkFilename: '[name]-[chunkhash:8].js',
    },
    performance: isProd && {
      maxAssetSize: 300000,
      maxEntrypointSize: 300000,
      hints: 'warning',
    },
    stats,
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[hash:base64:5]',
              minimize: {
                discardComments: {
                  removeAll: true,
                },
              },
            },
          }),
        },
        {
          test: /.(mp4|png|jpg|woff(2)??|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/,
          use: ['url-loader?limit=100000'],
        },
      ],
    },
    plugins,
  };
};
