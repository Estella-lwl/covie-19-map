const { defineConfig } = require('@vue/cli-service');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      // 需要重启 IDE
      .set('styles', resolve('src/assets/styles'));
    // 这里只写了两个，可以自己再加，按这种格式.set('', resolve(''))
  }
};

module.exports = defineConfig({
  // transpileDependencies: true,
  // lintOnSave: false //关闭语法检查
  // // devServer: {
  // //   proxy: {
  // //     ws: false
  // //   }
  // // }

  publicPath: './',
  lintOnSave: false, // 关闭语法检查
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3000/', // 本地后端地址
        changeOrigin: true, //允许跨域
        ws: false
      }
    }
  }
});
