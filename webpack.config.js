const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    module: {
        rules: [
            { test: /\\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            { test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9000
    }
};