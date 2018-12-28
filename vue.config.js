const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: ` @import "@/assets/scss/global.scss";`
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 1024,
        minRatio: 0.8
      }))
    }
  },

}


// module.exports = {
//   css: {
//     loaderOptions: {
//       // 给 sass-loader 传递选项
//       sass: {
//         // @/ 是 src/ 的别名
//         // 所以这里假设你有 `src/variables.scss` 这个文件
//         data: ` @import "@/assets/scss/global.scss;"`
//       }
//     }
//   },
//   productionSourceMap: false

// }