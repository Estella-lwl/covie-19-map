const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  // transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  chainWebpack: (config) => {
    // 这里只写了两个，可以自己再加，按这种格式.set('', resolve(''))
    config.resolve.alias
      .set("@", resolve("src"))
      .set("styles", resolve("src/assets/styles"));
  },

  // publicPath: './',
  devServer: {
    proxy: {
      //配置跨域
      "/data": {
        target: "http://api.tianapi.com", // 接口
        changOrigin: true, //允许跨域
        pathRewrite: {
          "^/data": "",
        },
      },
      "/api": {
        target: "https://lab.isaaclin.cn",
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
        secure: true,
      },
    },
  },
});
