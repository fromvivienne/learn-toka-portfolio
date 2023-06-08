const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config.module
    .rule('vue')
    .use('vue-loader')
    .tap(options => ({
      // modify the options...
      ...options,
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("ion-"),
      },
    }));
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp( "https://firebasestorage.googleapis.com/.*"),
          handler: 'CacheFirst',
        },
        {
          urlPattern: new RegExp("https://firestore.googleapis.com/.*"),
          handler: 'CacheFirst',
        },
        {
          urlPattern: new RegExp("https://fonts.gstatic.com/.*"),
          handler: 'CacheFirst',
        }
      ]
    }
  }
}