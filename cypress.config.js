const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 7000,
    reporter : "cypress-mochawesome-reporter",
  env: {
    URL : "https://rahulshettyacademy.com",
  },
  projectId: "nxsn5f",

  retries : {
    runMode :1,

  },

  e2e: {
   // implement node event listeners here 
      //setting up cucumber 
      //setting up event done
      
     // require('cypress-mochawesome-reporter/plugin')(on);
     setupNodeEvents,
 
    specPattern: 'cypress/Integration/Examples/*.js',
    specPattern : "cypress/Integration/Greenkart/*.js",
    specPattern : 'cypress/Integration/Examples/BDDCucumber/*.feature',
    specPattern :'cypress/Integration/Cypress_Intercept/*.js'
  },
});  
