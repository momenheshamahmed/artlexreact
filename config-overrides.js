const {
  useBabelRc,
  override,
  addWebpackPlugin,
  disableEsLint
} = require("customize-cra");
const webpack = require("webpack");

module.exports = override(
  disableEsLint(),
  useBabelRc(),
  addWebpackPlugin(
    new webpack.DefinePlugin({
      //<--key to reduce React's size
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  )
);
