const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["/src/index.js"],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "frontend micro-frontend wiht webpack" }),
  ],
};
