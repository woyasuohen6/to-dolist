const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack') 

module.exports = merge(common, {
    mode: 'development', // 不压缩代码,加快编译速度
    devtool: '#cheap-module-eval-source-map', // 提供源码映射文件调试使用
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader'] // css 样式直接写入 js 文件
        },{
            test: /\.styl/,
            use: ['style-loader','css-loader','stylus-loader']
        }]
    },
    devServer: { //开启 dev-server
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
})