使用指南：

1. 在 webpack.dll.js 中

- 配置需要放入 dll 中的三方库
- 使用 webpack.DllPlugin 插件生成映射文件 `manifest.json`

2. 在 package.json 中配置 `"build:dll": "webpack --config ./webpack.dll.js"`；执行 `npm run build:dll`
3. 在 webpack.config.js 中：

- 使用 `DllReferencePlugin` 插件引用 `manifest.json` 文件，DllReferencePlugin 的作用就是告诉 webpack 这些模块不需要参与打包的，而是从 dll 中引用
- 使用 `AddAssetHtmlPlugin` 插件将 `manifest.json` 文件添加到 index.html 文件中
