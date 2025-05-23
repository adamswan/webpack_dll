const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

module.exports = {
  mode: "production",

  entry: "./src/index.js",

  output: {
    filename: "built.js",
    path: resolve(__dirname, "dist"),
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    // 进度条插件
    new WebpackBar({
      name: "Webpack构建",
      color: "#61dafb",
    }),

    // 告诉 webpack , 在 manifest.json 中的库不再参与打包
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, "dll/venders.manifest.json"),
    }),

    // 将这些不参与打包的库，自动引入到 html 中
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, "dll/venders.js"),
    }),
  ],
};
