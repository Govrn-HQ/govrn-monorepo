const DATABASE_URL = process.env.DATABASE_URL;

import { Client } from 'pg';

const queryDB = (query: string) => {
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
