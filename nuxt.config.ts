// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@casino/base',
  ],
  // devtools: { enabled: true },
  modules: ['@casino/api', '@nuxt/devtools'],
})
