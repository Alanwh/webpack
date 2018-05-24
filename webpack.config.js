const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
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
            }, 
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            {
                test: /\.html$/,
                use: [ {
                  loader: 'html-loader',
                  options: {
                    minimize: true
                  }
                }],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: './index.html'
        }),
        new CleanWebpackPlugin(['dist/']),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port:8080,
        inline:true,
        hot:true
    }
}

module.exports = config;