const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: ['lodash'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library', // 库打包的时候需要（会在全局变量里面增加 library这个变量）
    libraryTarget: 'umd',
  },
}
