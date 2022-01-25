const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: false,
    entry: {
        yaradbg_frontend: ['./src/js/external/jquery.layout_and_plugins.min.js',
            './src/js/external/jquery.lazytable.js',
            './src/js/main.js'],
        worker: [ './src/js/hex_exp_worker.js'],
        operators: ['./src/js/operators.js']
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        library: '[name]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ],
    externals: {
        "jquery": "jQuery"
    },
    module: {
        rules: [
            { test: /\.css$/, exclude: /node_modules/, use: ["style-loader", "css-loader"] }
        ]
    }
};