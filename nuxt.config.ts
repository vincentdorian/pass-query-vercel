// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  routeRules: {
    'pass-query': {
      isr: {
        passQuery: true,
      }
    },
    'no-pass-query': {
      isr: {
        passQuery: false,
      }
    }
  },
})
