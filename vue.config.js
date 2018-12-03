// module.exports = {
//   chainWebpack: config => {
//     // 移除 prefetch 插件
//     config.plugins.delete('prefetch')

//     // // 或者
//     // // 修改它的选项：
//     // config.plugin('prefetch').tap(options => {
//     //   options[0].fileBlacklist = options[0].fileBlacklist || []
//     //   options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
//     //   return options
//     // })
//   }
// }

const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 1024,
        minRatio: 0.8
      }))
    }
  }
}