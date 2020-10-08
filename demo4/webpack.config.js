var HtmlWebpackPlugins = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist.js',
  },
  plugins: [
    new CleanWebpackPlugin(), // 默认清空我们output里面设置的所有文件夹
    new HtmlWebpackPlugins({
      template: 'src/index.html',
    }),
  ],
}
