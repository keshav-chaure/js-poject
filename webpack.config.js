var path = require('path');
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
            loader:"babel-loader"
            }
        ]
    },
    devServer: {
      
      inline: true,
      port: 3000,
      hot: true,
      stats:"errors-only"
    }
 /*   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  */
 };