const path = require('path');

module.exports = {
	mode: "production",
	entry: {
		polyfill: "babel-polyfill",
		index: "./js/index.js",
		photo_page: "./js/photographer_page.js"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			}
		]
	}
};