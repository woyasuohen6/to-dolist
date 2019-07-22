const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: '[name].[hash:8].bundle.js',
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
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin(),
        new CleanWebpackPlugin()
    ]
}