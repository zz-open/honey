// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@unocss/nuxt',
  ],
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  }
})
