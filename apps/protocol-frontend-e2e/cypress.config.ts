import { defineConfig } from 'cypress';

const {Client} = require('pg');

const queryDB = (query) => {
  const connectionInfo = process.env['DATABASE_URL']
  const client = new Client(connectionInfo)
 
  client.connect()

  return new Promise((resolve, reject)=>{
    client.query(query,(err,res) =>{
      if (err) reject(err)
      else {
        client.end()
        return resolve(res)
      }
    })
  })
}

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
