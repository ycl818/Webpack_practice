const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common.js");

const prod = {
  mode: "production", // 會是沒有壓縮過的, production: 壓縮
  devtool: "cheap-module-source-map", // production環境中最佳選擇
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ], // loader執行順序是從後向前
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          ,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ], // loader執行順序是從後向前
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
module.exports = merge(commonConfig, prod);
