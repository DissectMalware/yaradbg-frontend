const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.core.js');

module.exports = merge(common, {
    output: {
        filename: '[name].[contenthash].min.js',
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
});