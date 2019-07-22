const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // +++
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //引入清除文件插件
// const ExtractPlugin = require('extract-text-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack') 
//判断是否为开发环境的变量
const isDev = process.env.NODE_ENV === 'development'


config = {
    target: 'web',
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.(gif|jpg|jpeg|svg|png)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name]-aaa.[ext]'
                }
            }]
        },{
            test:/\.(js|jsx)$/,
            use:['babel-loader'],
            exclude:/node_modules/
        }]
    },
    plugins:[   
        new HTMLPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),//实例化，参数为目录
    ]
}

if(isDev) {
    config.module.rules.push({
        test: /\.styl/,
        use: ['style-loader','css-loader',{
            loader: 'postcss-loader',
            options: {
                sourceMap: true
            }
        },'stylus-loader']
    }),
    config.devtool = '#cheap-module-eval-source-map',//调试代码映射
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        
        },
    hot: true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    )
} else {
    config.optimization = { // +++
        splitChunks:{ // +++
            chunks:'initial' // +++ initial(初始块)、async(按需加载块)、all(全部块)
        }
    },
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    },
    config.output.filename = '[name].[chunkhash:8].js',
    config.module.rules.push({
        test: /\.styl/,
        use: [
            miniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    })
    config.plugins.push(
        new miniCssExtractPlugin({
            filename: 'styles.[contenthash:8].css'
        })
    )
}
module.exports = config;