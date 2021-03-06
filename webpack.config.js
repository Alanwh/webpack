// const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');


// module.exports = {
//     devtool: 'cheap-module-source-map',
//     entry: {
//         app: [
//             'react-hot-loader/patch',
//             path.join(__dirname, 'src/index.js'),
//         ],
//         vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
//     },
    
//     output: {
//         publicPath : '/',
//         path: path.join(__dirname, './dist'),
//         filename: '[name].[chunkhash].js',
//         chunkFilename: '[name].[chunkhash].js'
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: ['babel-loader?cacheDirectory=true'],
//                 include: path.join(__dirname, 'src')
//             },
//             {
//                 test: /\.(sass|scss|css)$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: 'style-loader',
//                     use: [
//                         {
//                             loader: 'css-loader',
//                             options: {
//                                 sourceMap: true,
//                                 minimize: true
//                             }
//                         }, 
//                         {
//                             loader: 'postcss-loader',
//                             options: {
//                                 sourceMap: true
//                             }
//                         },
//                         {
//                             loader: 'sass-loader',
//                             options: {
//                                 sourceMap: true
//                             }
//                         }
//                     ]
//                 })
//             },
//             {
//                 test: /\.(png|jpg|gif)$/,
//                 use: [{
//                     loader: 'url-loader',
//                     options: {
//                         limit: 8192
//                     }
//                 }]
//             }
//         ]
//     },

//     resolve: {
//         alias: {
//             pages: path.join(__dirname, 'src/pages'),
//             component: path.join(__dirname, 'src/component'),
//             router: path.join(__dirname, 'src/router'),
//             actions: path.join(__dirname, 'src/redux/actions'),
//             reducers: path.join(__dirname, 'src/redux/reducers')
//         }
//     },

//     plugins: [
//         new ExtractTextPlugin({
//             filename: '[name].[contenthash:5].css',
//             allChunks: true
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: path.join(__dirname, 'src/index.html')
//         }),
//         new UglifyJSPlugin(),
//         new webpack.DefinePlugin({
//             'process.env': {
//                 'NODE_ENV': JSON.stringify('production')
//              }
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor'
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'runtime'
//         }),
//         new webpack.HashedModuleIdsPlugin(),
//         new CleanWebpackPlugin(['dist/*.*'])
//     ]
    
// };

const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
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
                                minimize: true,
                                modules: true,
                                localIdentName: '[local]--[hash:base64:5]'
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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]

};

module.exports = merge(commonConfig, publicConfig);
