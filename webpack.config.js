const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清楚每次打包多余js
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config = {
    mode: 'development',
    // devtool:'source-map',
    entry: './src/index.js',
    output: {
        filename: '[name]-[hash:5].js',
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true
                            }
                        }, 
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }, 
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 8192,
                        publicPath: '../images',
                        outputPath: 'images/'
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename:`./css/[name]-[hash:5].css`,
        })
    ],
    devServer: {
        port:8080,
        inline:true,
        hot:true
    }
}

module.exports = config;