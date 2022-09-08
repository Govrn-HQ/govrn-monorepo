import { defineConfig } from 'cypress';
import queryDB from './src/support/db';

module.exports = defineConfig({
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  // modifyObstructiveCode: false,
  video: true,
  videosFolder: '../../dist/cypress/apps/protocol-frontend-e2e/videos',
  screenshotsFolder:
    '../../dist/cypress/apps/protocol-frontend-e2e/screenshots',
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on('task',{
        queryDatabase: query => {
          return queryDB(query)
        },
  
      })
    
    },
    specPattern: './src/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/support/index.ts',
  },
  env: {
    "address" : process.env['ADDRESS'],
    "COOKIE" : process.env['COOKIE'],
  },
});
