const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const optimization = () => {
  const config = {
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendors: {
    //       filename: 'js/vendors.[hash].js',
    //     },
    //   },
    // },
  };

  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  target: isDev ? 'web' : 'browserslist',
  entry: {
    main: [
      '@babel/polyfill',
      './index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@img': path.resolve(__dirname, 'src/assets/images'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@com': path.resolve(__dirname, 'src/components'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: optimization(),
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Webpack test',
    //   template: 'template.html',
    //   filename: 'index.html',
    //   minify: {
    //     collapseWhitespace: !isDev,
    //   },
    //   inject: 'body',
    // }),
    new HtmlWebpackPlugin({
      title: 'Axus group',
      template: 'index.pug',
      filename: 'index.html',
      minify: {
        // collapseWhitespace: !isDev,
        collapseWhitespace: false,
      },
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      runtime: true,
    }),
    new ESLintWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              root: path.resolve(__dirname, 'src/components'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|webp|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]',
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true,
    watchFiles: ['src/**/*.html', 'src/**/*.pug'],
    port: 8080,
  },
};
