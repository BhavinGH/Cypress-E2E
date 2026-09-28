import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  e2e: {
    //baseUrl: 'https://www.saucedemo.com'
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
