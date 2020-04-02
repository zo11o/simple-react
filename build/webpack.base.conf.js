

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
    mode: JSON.stringify(process.env.NODE_ENV),
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
        new CleanWebpackPlugin(),
        new Webpack.DefinePlugin({
            'process.env': {
                APP_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            title: 'simple-react',
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            hash: true, // 在打包的资源插入html会加上hash
            template: 'index.html'
        }),
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 9000
    // }
}