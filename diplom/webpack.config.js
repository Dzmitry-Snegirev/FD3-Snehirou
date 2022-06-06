const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
	filename: "bundle.css"
});

module.exports = {
	entry: "./App.js", // основной файл приложения
	output: {
		path: __dirname, // путь к каталогу выходных файлов
		filename: "bundle.js"  // название создаваемого файла 
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/, // какие файлы обрабатывать
				exclude: /node_modules/, // какие файлы пропускать
				use: { loader: "babel-loader" }
			},
			{
				test: /\.css$/,
				use: extractCSS.extract({
					use: ["css-loader"]
				})
			},
			{
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'less-loader']
				}),
				test: /\.less$/
			},

			// this handles images
			{
				test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
				use: 'file-loader?name=[name].[ext]?[hash]'
			},

			// the following rules handle font extraction
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			},
			{
				test: /\.otf(\?.*)?$/,
				use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
			}
		]
	},
	plugins: [
		extractCSS
	]
}
