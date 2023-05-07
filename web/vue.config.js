const {
  defineConfig
} = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  devServer: {
    port: 8080, // 本地服务器端口号
    host: 'localhost', // 本地服务器主机名
    open: true, // 打开浏览器窗口
    proxy: {
      '/': {
        ws: false,
        target: 'http://localhost:5200', // 目标服务器地址
        changeOrigin: true,
      },
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  },
})