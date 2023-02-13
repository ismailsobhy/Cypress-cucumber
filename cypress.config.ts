import { defineConfig } from "cypress";

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),
      };
      // implement node event listeners here
      on("file:preprocessor", cucumber(options));
    },
    baseUrl: "https://staging.powerus.de/",
    viewportHeight: 760,
    viewportWidth: 360,
    defaultCommandTimeout: 30000,
    specPattern: "cypress/e2e/**/*.feature",
  },
});
