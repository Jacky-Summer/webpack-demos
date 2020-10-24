var HtmlWebpackPlugins = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'dist.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 默认清空我们output里面设置的所有文件夹
    new HtmlWebpackPlugins({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin(), // 抽离css代码到单独文件
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})], // 压缩css代码
    splitChunks: {
      chunks: 'all',
    },
  },
}
