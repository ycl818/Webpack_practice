const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./../dist"), // __dirname = c:/Users/.... 絕對路徑
  },
  module: {
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // loader執行順序是從後向前
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"], // loader執行順序是從後向前
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: [
            //   [
            //     "@babel/preset-env",
            //     {
            //       useBuiltIns: "usage",
            //     },
            //   ],
            // ],
            plugins: [
              [
                "@babel/plugin-transform-runtime", // 用這種打包方式 只要是不會汙染全域的變數
                {
                  absoluteRuntime: false,
                  corejs: 3,
                  helpers: true,
                  regenerator: true,
                  version: "7.0.0-beta.0",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    // 會再打包結束後自動生成html文件，並把打包生成的文件自動引入到html中
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
