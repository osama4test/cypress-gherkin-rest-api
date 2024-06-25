const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
    baseUrl: 'https://reqres.in/api',
    specPattern: 'cypress/integration/**/*.feature',
  },
});
