/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { activityTypes, guilds, users } from './lib/airtable';
import { Formula } from '@qualifyze/airtable-formulator';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to airtable-api!' });
});

// Endpoint to fetch users
app.get('/users', async (req, res) => {
  // TODO: I am guessing over 1000 users
  // this will start to become slow
  const query = {
    filterByFormula: [
      '=',
      { field: 'guild_id' },
      req.query.guild_id,
    ] as Formula,
  };

  const u = [];
  for await (const person of users.select(query)) {
    console.log(person.data);
    u.push(person.data);
  }
  res.send(u);
});

// Endpoint to contribution types
app.get('/contribution/types', async (req, res) => {
  // TODO: I am guessing over 1000 users
  // this will start to become slow
  const query = {
    filterByFormula: ['=', { field: 'guild' }, req.query.guild_id] as Formula,
  };

  const u = [];
  for await (const activity of activityTypes.select(query)) {
    console.log(activity.data);
    u.push(activity.data);
  }
  res.send(u);
});

// Endpoint to fetch guild metadata
app.get('/guild', async (req, res) => {
  // TODO: I am guessing over 1000 users
  // this will start to become slow
  const query = {
    filterByFormula: [
      '=',
      { field: 'guild_id' },
      req.query.guild_id,
    ] as Formula,
  };

  let u = {};
  for await (const guild of guilds.select(query)) {
    console.log(guild.data);
    u = guild.data;
  }
  res.send(u);
});

// Endpoint to save contribution

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
