const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "app.bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 5000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    })
  ]
};
