### 入口文件
* 单入口语法
```
entry: {
    main: './src/index.js',
}

```
* 多入口语法
```
entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js
}
```


### 出口文件
```
output: {
    filename: [name]-[hash:5].js,
    path: path.resolve(__dirname,'dist/')
}
```
使用cdn和hash
```
output: {
    path: '/src/images/[hash]',
    publicPath: 'http://cdn.example.com/assets/[hash]'
}
```


### 模式
语法
```
mode: production|development
```
 shell 命令中设置模式
```
webpack --mode=production
```


### loader
* 在配置文件中设置
```
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        }
    ]
}
```
* 内联
```
import Style from 'style-loader|css-loader?modules!./src/index.css';
```
* shell 命令中设置
```
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```


### 常用插件
* [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) 清楚每次运行时产生多余的js

