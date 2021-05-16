const webpack = require( 'webpack' );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, 'src')

module.exports = {

  const devMode = argv.mode === 'development';

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { 'modules': false }], // "import" statements should be processed by webpack for chunk optimization
                'react',
                'flow',
              ],
              plugins: [
                'syntax-dynamic-import',
                'transform-class-properties',
                'transform-object-rest-spread',
              ],
              cacheDirectory: true,
            }
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: !devMode,
              sourceMap: devMode,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: !devMode,
              sourceMap: devMode,
              localIdentName: '[local]--[hash:base64:10]'
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: devMode,
              plugins: () => [autoprefixerPlugin],
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: devMode,
            }
          }
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: !devMode,
              sourceMap: devMode,
              localIdentName: '[local]--[hash:base64:10]'
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: devMode,
              plugins: () => [autoprefixerPlugin],
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: devMode,
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        include: /src\/img/,
        exclude: /\.inline\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash].[ext]',
          }
        }
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        include: /src\/font/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'font/[name].[hash].[ext]',
          }
        }
      },
      {
        test: /\.inline\.svg$/,
        include: /src\/img/,
        use: [
          {
            loader: '@svgr/webpack?-prettier,-svgo![path]'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./build/*']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),     
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].chunk.[chunkhash].css',
    }),
    new CopyWebpackPlugin([
      // The "to:" paths are relative to the "output.path:" directory
      { from: './public', to: './' },
    ]),
    new EnvironmentPlugin([
      'API_BASE_URL'
    ]),
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false
  },
  optimization: {
    minimize: true
  }
}
