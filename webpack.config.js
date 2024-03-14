const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["/src/index.js"],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "frontend micro-frontend wiht webpack",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: "./public",
    compress: true, // Optionally enable compression for faster loading
    port: 3000, // Set the desired port number
    open: true, // Optional: Automatically open the application in browser on startup
  },
};
