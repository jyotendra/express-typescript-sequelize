const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  target: 'node',
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
      "@models": path.resolve(__dirname, 'src', 'db', 'models'),
      "@routes": path.resolve(__dirname, 'src', 'routes'),
      "@doa": path.resolve(__dirname, 'src', 'doa'),
      "@controllers": path.resolve(__dirname, 'src', 'controllers'),
      "@config": path.resolve(__dirname, 'config'),
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
  ],
  externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore']
};