const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  target: 'node',
  watch: true,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
              loader: 'awesome-typescript-loader',
          },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      "@models": path.resolve(__dirname, 'src', 'models'),
      "@routers": path.resolve(__dirname, 'src', 'routers'),
      "@doa": path.resolve(__dirname, 'src', 'doa'),
      "@controllers": path.resolve(__dirname, 'src', 'controllers'),
      "@config": path.resolve(__dirname, 'src', 'config'),
      "@src":path.resolve(__dirname, 'src'),
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      test: /\.ts$/i
    })
  ]
};