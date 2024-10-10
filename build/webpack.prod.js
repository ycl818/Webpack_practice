const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common.js");

const prod = {
  mode: "production", // 會是沒有壓縮過的, production: 壓縮
  devtool: "cheap-module-source-map", // production環境中最佳選擇
};
module.exports = merge(commonConfig, prod);
