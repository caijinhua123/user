// vue-cli的配置文件
const port = process.env.port || process.env.npm_config_port || 7001 // dev port
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  // lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    proxy: {
      "/api": {
        target: "http://47.111.172.167:7001",
      },
      "/res":{
        target: "http://47.111.172.167:7001",
      },
      "/static":{
        target: "http://47.111.172.167:7001",
      }
    },
  },
  configureWebpack: require("./webpack.config"),
};

  