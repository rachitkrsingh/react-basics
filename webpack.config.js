var webpack = require("webpack");
var path = require("path");

var DIST_DIR 	= path.join(__dirname, "dist");
var SRC_DIR  	= path.join(__dirname, "src");

var config = {
	entry 	: path.join(SRC_DIR,"/app/index.js"), 
	output 	: {
		path  : path.join(DIST_DIR ,"app"),
		filename : "bundle.js",
		publicPath : "/app/"
	},
	module : {
		rules : [
			{
				test : /\.(js)$/,
				exclude: /node_modules/,
				loader : "babel-loader",
				options : {
					presets : ["react", "es2015", "stage-2"]
				}
			}
		]
	},
	resolve : {
		modules : ['node_modules']
	}
};

module.exports = config;