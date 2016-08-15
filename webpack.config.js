var path = require('path');

module.exports = {
  entry: "./javascript/app13",
  output: {
    path: __dirname,
    filename: "build/bundle.js",
    sourceMapFilename: "sourcemap"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      javascript: path.resolve(__dirname, 'javascript')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devtool: "#inline-source-map"
};
