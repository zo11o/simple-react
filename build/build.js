const webpack = require("webpack")
const ora = require("ora")
const chalk = require('chalk')
const WebpackConfig = require('./webpack.prod.conf')

// 启动动画
const spinner = ora("build...")
spinner.start()
console.log( process.env.NODE_ENV)
webpack(WebpackConfig, function (err, stats) {
    // 停止动画
    spinner.stop()

    if (err) throw err
    // 控制台输入打包成功
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan(' Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
    process.exit(); // 终止终端进程
})