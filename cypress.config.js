const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    defaultCommandTimeout: 4000,
    baseUrl: "https://computer-database.gatling.io/computers"
  },
});
