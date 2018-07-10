const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/script/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	optimization: {
		minimize: true
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'src/lib',
			to: 'lib'
		}]),
		new HtmlWebpackplugin({
			template: path.join(__dirname, 'src/index.html'),
			filename: path.join(__dirname, 'dist/index.html')
		})
	]
};