const { LibManifestPlugin } = require("webpack");

// node的模块
module.exports = {
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-react-jsx", {pragma: "createElement"}]]
          }
        }
      }
    ]
  },
  mode: "development"
}