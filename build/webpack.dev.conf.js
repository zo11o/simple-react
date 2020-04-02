const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf.js')
const ora = require("ora")
const chalk = require('chalk')

const spinner = ora("build...")
spinner.start()
console.log(process.env.NODE_ENV)

module.exports = webpackMerge(webpackBaseConfig, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
})