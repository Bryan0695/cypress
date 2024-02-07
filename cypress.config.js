const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    experimentalStudio: true,
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('@cypress/code-coverage/task')(on, config)

      //Inicio codigo para configurar el cypress mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      //FIN codigo para configurar el cypress mochawesome reporter

    },
  },
});
