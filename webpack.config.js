const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清楚每次打包多余js

config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name]-[hash:5].js',
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                    
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: './index.html'
        }),
        new CleanWebpackPlugin(['dist/'])
    ]
}

module.exports = config;