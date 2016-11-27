const path = require('path');
const webpack = require('webpack');

const config = {
	context: __dirname,
  entry: './client/app.js',
  output: {
    filename: 'webpack.bundle.js',
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
    loaders: [
      {
      	test: /\.(js|jsx)$/, 
      	loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
