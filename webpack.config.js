const path = require('path');

module.exports = {
  mode: "production",
  entry: './client/src/index.js',

  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },

  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  }

}