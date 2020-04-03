# simple-react
我们一步一步学习怎么开发一个简易版本的react

## 第一章

### 1.1 搭建 typescript 开发环境

#### 1.1.1 安装 typescript

```
npm init
npm i typescript
tsc init
生成 tsconfig.json
```

#### 1.1.2 配置 webpack

安装webpack
```
npm install webpack webpack-cli -D
```

编写 webpack 配置
``` js
/**
 * 在根目录下创建 build 目录
    webpack.config.js
    下面是基础 webpack.config.js 配置
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                APP_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            hash: true, // 在打包的资源插入html会加上hash
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}
```

第一单元流程 unit1 分支

React.createElement() 返回一个 ReactElement 实例对象（虚拟 dom tree 节点） -> reactElementInstance

reactElementInstance 传递给 ReactDOM.render 方法

ReactDOM.render 方法主要做一些参数校验，合理通过之后调用 legacyRenderSubtreeIntoContainer 方法


