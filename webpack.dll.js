const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    // 需要放入dll的库
    venders: ["vue", "jquery", "echarts", "lodash"],
  },

  // dll的打包输出
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dll"),
    // 被放入的dll的库的名称
    library: "[name]_[hash]",
  },

  // 生成 manifest.json，就是一个映射关系
  plugins: [
    new webpack.DllPlugin({
      // 和 output.library 保持一致
      name: "[name]_[hash]",
      // manifest.json 的输出路径
      path: resolve(__dirname, "dll/[name].manifest.json"), // 输出文件路径
    }),
  ],
  mode: "production",
};
