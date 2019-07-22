![](https://github.com/woyasuohen6/to-dolist/blob/master/img/2.png)
# webpack4 + vue + jsx 打造 todo-list
*主要学习 webpack4 配置*
## 项目完成效果
![](https://github.com/woyasuohen6/to-dolist/blob/master/img/1.PNG)

## 使用技术
- vue 2+
- jsx
- webpack 4+
>使用依赖:
```
"devDependencies": {
    "autoprefixer": "^9.6.1",
    "babel-core": "^6.26.0",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.2",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.6.1",
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^5.2.0",
    "css-loader": "^3.1.0",
    "file-loader": "^4.1.0",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.8.0",
    "postcss-loader": "^3.0.0",
    "style-loader": "^0.23.1",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.2",
    "url-loader": "^2.1.0",
    "vue": "^2.6.10",
    "vue-loader": "^15.7.1",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.36.1",
    "webpack-cli": "^3.3.6",
    "webpack-merge": "^4.2.1"  
    }
```
## 项目启动
- npm install
- npm run dev

## webpack 4 插件使用
- webpack-dev-server  
    - 开发环境部署服务器，启动热加载
- HtmlWebpackPlugin
    - 打包后的文件自动插入 html
- postcss
    - postcss 是对css的扩展，允许使用下一代 CSS 语法，编译后转换成正常的css且会自动加上前缀
- CleanWebpackPlugin
    - 打包之前清空上次打包的文件
- mini-css-extract-plugin
    - 分离 css 样式文件
- webpack-merge
    - 分离 webpack 配置文件
