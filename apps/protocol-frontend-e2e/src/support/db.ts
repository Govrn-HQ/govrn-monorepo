const path = require('path');
require('dotenv').config({
     path: path.resolve(__dirname, '../../.env') 
});
const DATABASE_URL = process.env.DATABASE_URL;

const { Client } = require('pg');

const queryDB = (query) => {
  const connectionInfo = DATABASE_URL  
 
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

export default queryDB;

const query1 = `
TRUNCATE TABLE "GuildContribution" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Contribution" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;
`
//Run func queryDB to automatically clear your db before tests
//queryDB(query1);

