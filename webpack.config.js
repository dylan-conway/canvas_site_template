const path = require('path');

module.exports = {
  mode: 'development',
  entry: './www/src/main.js',
  output: {
    path: path.resolve(__dirname, 'www/public/'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}
