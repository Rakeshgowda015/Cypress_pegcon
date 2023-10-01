const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      return config;
    },
    specPattern: ["cypress/integration/features/**/*.feature"],
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
    modifyObstructiveCode: true,
    trashAssetsBeforeRuns: true,
    supportFile: 'cypress/support/deve2e.js',
    viewportWidth: 1500,
    viewportHeight: 1200,
    numTestsKeptInMemory: 0
  },
  env: {
    Dashboard: "https://pegcon.dev.pearsoncmg.com/index.html"
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 0,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
});
