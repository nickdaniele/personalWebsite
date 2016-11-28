const path = require('path');
const webpack = require('webpack');

const config = {
	context: __dirname,
  entry: './client/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  resolve: {
  	extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
  	colors: true,
  	reasons: true,
  	chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
      	test: /\.(js|jsx)$/, 
      	loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
