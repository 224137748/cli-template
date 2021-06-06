

module.exports = {
  frame: 'vue',

  // document.title
  title: 'Vue app',

  meta: {
    // meta: description
    description: 'a vue demo',
    // meta: keyword
    keyword: 'undefined',

  },

  // 配置代理
  proxy: {
    "/api": {
      target: "http://findream.vip",
      pathRewrite: { "^/api": "/api/music" },
      changeOrigin: true,
      secure: true
    }
  }
};
