import { defineConfig } from 'cypress';
import queryDB from './src/support/db';
import {create_contribution,
  create_user, 
  create_guild, 
  delete_guild, 
  delete_user,
  delete_contribution,
  contribution_status
} 
from './src/support/dbQueries';

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
    setupNodeEvents(on, config) {
      on('task',{
        queryDatabase: query => {
          return queryDB(query)
        },
        create_guild: guild_name => {
          return create_guild(guild_name)
        },
        create_user: userData => {
          return create_user(userData)
        },
        create_contribution: contributionData => {
          return create_contribution(contributionData)
        },
        delete_contribution: proofData => {
          return delete_contribution(proofData)
        },
        delete_user: username => {
          return delete_user(username)
        },
        delete_guild: guild_name => {
          return delete_guild(guild_name)
        },
        contribution_status: () => {
          return contribution_status()
        },
  
      })
    },
    specPattern: './src/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/support/index.ts',
  }

});
