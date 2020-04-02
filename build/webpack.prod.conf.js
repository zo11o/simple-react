const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin()
    ],
})