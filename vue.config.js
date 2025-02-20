module.exports = {
  publicPath: "./",
  pages: {
    index: {
      // page 的入口
      entry: "example/main.js",
      // 模板来源
      template: "example/index.html"
    }
  },
  devServer: {
    port: 8000,
    disableHostCheck: true,
    // hot: true,
    public: "173.16.20.130:8000"
  }
};
