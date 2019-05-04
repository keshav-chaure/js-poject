var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

 
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
      },
    module:{
        rules:[
            {
              test: /\.js$/,
              exclude:/node_modules/,
              use:{
                loader:"babel-loader"
              }
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
             }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
      
      inline: true,
      port: 3000,
      hot: true,
      stats:"errors-only"
    },
    plugins: [
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],

 /*   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  */
 };