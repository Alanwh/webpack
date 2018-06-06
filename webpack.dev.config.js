// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//     mode: 'development',
//     devtool: 'inline-source-map',
    
//     entry: {
//         app: [
//             'react-hot-loader/patch',
//             path.join(__dirname, 'src/index.js'),
//         ],
//         vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
//     },
    
//     output: {
//         path: path.join(__dirname, './dist'),
//         filename: '[name].[hash].js',
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

//     devServer: {
//         port: 8080,
//         contentBase: path.join(__dirname, './dist'),
//         historyApiFallback: true,
//         host: '10.32.84.21',
//         proxy: {
//            // "/api": "http://localhost:3000"
//         }
//     },

//     resolve: {
//         alias: {
//             pages: path.join(__dirname, 'src/pages'),
//             component: path.join(__dirname, 'src/component'),
//             router: path.join(__dirname, 'src/router'),
//             actions: path.join(__dirname, 'src/redux/actions'),
//             reducers: path.join(__dirname, 'src/redux/reducers')
//             // redux: path.join(__dirname, 'src/redux')
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
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor'
//         })
//     ]
    
// };

const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            "babel-polyfill",
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
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
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '10.32.84.21',
        proxy: {
           "/api/*": "http://10.32.84.21:3000/$1"
        }
    },
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);
