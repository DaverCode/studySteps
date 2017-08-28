var webpack = require('webpack')
module.exports = {
  entry: './js/index.js',
  output: {
    path: '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]},
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: 'url-loader'
      },
    ]
  }
}
