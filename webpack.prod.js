const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common,{
    mode:'production', // 压缩代码
    entry: {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: path.join(__dirname, 'dist')
    },
    optimization: { 
        splitChunks:{ 
            chunks:'initial' 
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, // 提取css到外部文件中
                'css-loader'
            ]
        },{
            test: /\.styl/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        }]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash:8].css'
        })
    ]
})