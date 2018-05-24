const webpack = require('webpack');
const path = require('path');
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
                use: 'css-loader'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new HtmlWebpackPlugin({template: './src/index.html'})
        new CleanWebpackPlugin(['dist/'])
    ]
}

module.exports = config;