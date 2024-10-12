const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HappyPack = require("happypack");

const options = {
  extensions: [`js`, `jsx`],
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./../dist"), // __dirname = c:/Users/.... 絕對路徑
  },
  resolve: {
    extensions: [".js", ".jsx"], // 可以省略的副檔名
    alias: {
      "@": path.resolve(__dirname, "../src"), // 別名
    },
  },
  module: {
    noParse: /node_modules\/(jquery\.js)/,
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: "url-loader",
          options: {
            outputPath: "images/",
            name: "[name]_[hash].[ext]",
            limit: 10240, //235,259
          },
        },
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../src"),
        // use: "happypack/loader?id=js",
        use: ["babel-loader"],

        // loader: "babel-loader",
        // options: {
        //   presets: [
        //     [
        //       "@babel/preset-env",
        //       {
        //         useBuiltIns: "usage",
        //       },
        //     ],
        //   ],
        // plugins: [
        //   [
        //     "@babel/plugin-transform-runtime", // 用這種打包方式 主要是不會汙染全域的變數
        //     {
        //       absoluteRuntime: false,
        //       corejs: 3,
        //       helpers: true,
        //       regenerator: true,
        //       version: "7.0.0-beta.0",
        //     },
        //   ],
        // ],
        // },
      },
    ],
  },
  plugins: [
    // new HappyPack({
    //   id: "js",
    //   use: ["babel-loader"],
    // }),
    // 會再打包結束後自動生成html文件，並把打包生成的文件自動引入到html中
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin(options),
  ],
};
