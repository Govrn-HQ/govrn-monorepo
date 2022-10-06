import { defineConfig } from 'cypress';
import queryDB from './src/support/db';
import {create_contribution,
  create_MintedContribution,
  create_user, 
  create_guild, 
  create_GuildUser,
  contribution_status,
  delete_guild, 
  delete_user,
  delete_contribution,
  create_chainType,
  delete_chainType,
  delete_UserActivity
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
        contribution_status: () => {
          return contribution_status()
        },
        create_guild: guild_name => {
          return create_guild(guild_name)
        },
        create_user: userData => {
          return create_user(userData)
        },
        create_chainType: name => {
          return create_chainType(name)
        },
        create_contribution: contributionData => {
          return create_contribution(contributionData)
        },
        create_MintedContribution: contributionData =>{
          return create_MintedContribution(contributionData)
        },
        create_GuildUser: (GuildUserObject: GuildUserObjectType) =>{
          return create_GuildUser(GuildUserObject)
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
        delete_chainType: name => {
          return delete_chainType(name)
        },
        delete_UserActivity: userID =>{
          return delete_UserActivity(userID)
        },
  
      })
    },
    specPattern: './src/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/support/index.ts',
  }

});
