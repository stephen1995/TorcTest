const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://duckduckgo.com",
  },
  defaultCommandTimeout: 4000,
  chromeWebSecurity: false

})
