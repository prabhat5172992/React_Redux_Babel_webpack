/*React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state */
require("babel-polyfill");
const webpack = require("webpack");

module.exports = {
  //entry: "./src/index.js",
  entry: ["babel-polyfill", "./src/redux/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: process.env.port || 3000,
    contentBase: __dirname + "/public/",
    host: "0.0.0.0",
    hot: true
  }
};
