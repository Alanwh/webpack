const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const lessExtract = new ExtractTextPlugin('css/[name]-less.css');
const sassExtract = new ExtractTextPlugin('css/[name]-scss.css');

module.exports = {
    entry:{
        index: path.resolve(__dirname,'src','index.js'),
        base: path.resolve(__dirname,'src','base.js'),
        // vendor:['jquery','vue','ramda']
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath: 'http://localhost:9090/'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader'
                })
            },
            {
                test:/\.less$/,
                use:lessExtract.extract({
                    use: ['css-loader','less-loader']
                })
            },
            {
                test:/\.scss$/,
                use: sassExtract.extract({
                    use:['css-loader','sass-loader']
                })
            },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["env", "stage-0"]
                    }
                }
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 8*1024,
                        outputPath:'images'
                    }
                },
                include:path.join(__dirname,'./src'),
                exclude:/node_modules/
            },
            {
                test:/\.(html|htm)$/,
                use:'html-withimg-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','index.html'),
            filename:'index.html',
            chunks:['index'],//单入口不需要
            hash:true,//防止缓存
            minify:{
                removeAttributeQuotes:true//压缩 去掉引号
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','index.html'),
            filename:'base.html',
            chunks:['base'],
            hash:true,//防止缓存
            minify:{
                removeAttributeQuotes:true//压缩 去掉引号
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',//输出文件名字
            allChunks: true
        }),
        lessExtract,
        sassExtract,
        new webpack.ProvidePlugin({
            $:'jquery',
            R:'ramda'
        })
    ],
    resolve:{
        //配置解析
        //alias: [@util: path.resolve(__dirname, './src/libs/util')],
        //配置扩展
        //extensions: [".js", ".json"]
    },
    devServer:{//配置此静态文件服务器，可以用来预览打包后项目
        contentBase:path.resolve(__dirname,'dist'),//开发服务运行时的文件根目录
        host:'localhost',//主机地址
        port:9090,//端口号
        compress:true//开发服务器是否启动gzip等压缩
    }
}