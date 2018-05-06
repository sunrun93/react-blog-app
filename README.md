# React初步学习-利用React构建个人博客
用React和Webpack写了一个很简单的个人博客，主要是想要熟悉一下react中各种基本基本属性及方法的使用。在构建过程中碰到不少问题，通过阅读[官方API](https://reactjs.org/docs/hello-world.html),对react的生命周期和状态提升都有了更好的了解。
1. 构建工具webpack
2. css编译使用css-loader

[博客源码](git@github.com:sunrun93/react-blog-app.git)
1. 将源码下载到本地，通过npm i安装依赖，使用npm start运行项目
2. 依赖安装完成后，须在node_modules\react-scripts\config\webpack.config.dev.js及node_modules\react-scripts\config\webpack.config.prod.js文件中，找到css-loader的配置，对options进行相应修改，添加以下两行，已开启css-modules.
```
  {
      loader: require.resolve('css-loader'),
      options: {
        ......
        modules: true, 
        localIdentName: '[name]__[local]__[hash:base64:5]'
      },
   },
```

