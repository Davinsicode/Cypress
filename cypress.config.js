const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) 
    {
      // implement node event listeners here
    },
    defaultCommandTimeout: 60000,
    videoCompression: false,
  },
  
});
