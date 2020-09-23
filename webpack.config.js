// const webpack = require('webpack');
const path = require('path');
const port = process.env.PORT || 9000;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

	entry: './src/index.js',
	output: {
    filename: 'bundle.js',
    // filename: 'bundle.[hash].js',
    path: path.join(__dirname + '/docs'),
    // path: path.resolve(__dirname + '/dist'),
    // publicPath: '/', 
    },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    //host: 'localhost',
    compress: true,
    port: port,
    //historyApiFallback: true,
  },
 
  module: {
    rules: [
        // {
        //   test: /\.css$/,
        //   use: [
        //         {   loader: 'style-loader' }, 
        //         { loader: 'css-loader' }
        //     ]
        // },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            // options: {
            //   presets: ['es2015']
            // }
          }
        }
    ]
  },

//   plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: 'index.html',
//             title: 'Algun Nombre'
//         }),
//     ]
}