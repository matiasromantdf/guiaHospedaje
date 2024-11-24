export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('bootstrap')
  }
})