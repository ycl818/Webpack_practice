const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
module.exports = merge(commonConfig, prod);
