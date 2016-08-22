var path = require('path');

module.exports = {
  devtool: "#inline-source-map",
  entry: path.join(__dirname, 'javascript', 'app.js'),
  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      javascript: path.resolve(__dirname, 'javascript'),
      components: path.resolve(__dirname, 'javascript', 'components'),
      reducers:   path.resolve(__dirname, 'javascript', 'reducers'),
      utility:    path.resolve(__dirname, 'javascript', 'utility')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
