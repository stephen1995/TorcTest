const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://duckduckgo.com",
  },
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false

})
