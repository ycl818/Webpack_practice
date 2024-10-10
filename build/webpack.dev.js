const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development", // 會是沒有壓縮過的, production: 壓縮
  devtool: "eval-cheap-module-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // loader執行順序是從後向前
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"], // loader執行順序是從後向前
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // 使用 static 替代 contentBase
    },
    compress: true, // 启用 gzip 压缩
    port: 9000, // 可以指定端口
    hot: true,
    open: true,
  },
};

module.exports = merge(commonConfig, devConfig);
