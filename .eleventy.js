const fs = require("fs");
const filesize = require("file-size");
const process = require('dotenv').config();

module.exports = (function(eleventyConfig) {
	eleventyConfig.addFilter("filesize", function(path) {
		let stat = fs.statSync(path);
		if( stat ) {
			return (stat.size/1024).toFixed(2) + " KB";
		}
		return "";
	});

	eleventyConfig.addFilter("filesize-better", function(path) {
		let stat = fs.statSync(path);
		if( stat ) {
			return filesize(stat.size).human();
		}
		return "";
	});

	eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
});