const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.core.js');

module.exports = merge(common, {
    mode: 'development'
});