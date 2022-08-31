import { defineConfig } from 'cypress';

const {Client} = require('pg');

function queryDB(connectionInfo, query) {
  const client = new Client(connectionInfo)

  client.connect()

  client.query(query, (err, res) => {
    if (err){
        console.log(err.stack)
    }
    console.log(res.rows[0])
    client.end()
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
      //return;
      on('task',{
        // destructure the argument into the individual fields
        queryDatabase({ connectionInfo, query }) {
     
          return queryDB(connectionInfo, query)
        },

      })
    },
    specPattern: './src/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/support/index.ts',
  },
  env: {
    "address" : process.env['ADDRESS'],
    "COOKIE" : process.env['COOKIE'],
    "DATABASE_URL": process.env['DATABASE_URL']
  },
});
