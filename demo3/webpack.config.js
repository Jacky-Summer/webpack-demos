module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(eot|ttf|woff|woff2|svg)$/,
        use: 'file-loader',
      },
    ],
  },
}
