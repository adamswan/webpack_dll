使用指南：

1. 在 webpack.dll.js 中

- 指定哪些三方库要使用 dll 技术
- 使用 webpack.DllPlugin 插件生成映射文件 `manifest.json`和 的 dll 缓存文件 .dll.js

2. 在 package.json 中配置 `"build:dll": "webpack --config ./webpack.dll.js"`；执行 `npm run build:dll`
3. 在 webpack.config.js 中：

- 使用 `DllReferencePlugin` 插件引用 `manifest.json` 文件，DllReferencePlugin 的作用就是告诉 webpack ，在映射文件中的三方库，不再参与打包，而是从 dll 缓存文件中引用
- 使用 `AddAssetHtmlPlugin` 插件将已经构建完成的三方库直接添加到 index.html 中
