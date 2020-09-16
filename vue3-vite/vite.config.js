export default {
    proxy: {
      // with options
      '/api': {
        target: 'http://v.juhe.cn/weather/index',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
 
  }