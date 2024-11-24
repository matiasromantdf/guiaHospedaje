export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],

  app: {
    head: {
      title: 'Turismo en Ushuaia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  modules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Montserrat: [400, 600, 700],
      Lato: [400, 700]
    }
  },

  compatibilityDate: '2024-11-23'
})