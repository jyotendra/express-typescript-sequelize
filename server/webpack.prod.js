const webpack = require('webpack');
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.config.js");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const ENV = (process.env.NODE_ENV = process.env.ENV = "production");

module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma:8,  
        compress: {
          warnings: false
        }
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV)
      }
    })
  ]
});
