import util = require('util');
import tslib = require('tslib');
import cors = require('cors');
import * as express from 'express';
import { activityTypes, contributions, guilds, users } from './lib/airtable';
import { createAndGetActivityType } from './lib/utils';
import { Formula } from '@qualifyze/airtable-formulator';

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint to fetch users
app.get(
  '/users',
  util.callbackify(async (req, res) => {
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
      u.push(person.data);
    }
    res.send(u);
  })
);

// Endpoint to contribution types
app.get('/contribution/types', async (req, res) => {
  // TODO: I am guessing over 1000 users
  // this will start to become slow
  const query = {
    filterByFormula: [
      'OR',
      ['=', { field: 'guild' }, req.query.guild_id],
      ['=', { field: 'guild' }, req.query?.user_id || ''],
    ] as Formula,
  };

  const u = [];
  for await (const activity of activityTypes.select(query)) {
    u.push({ ...activity.data, id: activity.id });
  }
  res.send(u);
});

// Endpoint to fetch guild metadata
app.get(
  '/guild',
  util.callbackify(async (req, res) => {
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
      u = guild.data;
    }
    res.send(u);
  })
);

// Endpoint to fetch guild metadata
app.get(
  '/contribution',
  util.callbackify(async (req, res) => {
    // TODO: I am guessing over 1000 users
    // this will start to become slow
    const query = {
      filterByFormula: [
        '=',
        { field: 'member' },
        req.query.guild_id,
      ] as Formula,
    };

    let u = {};
    for await (const guild of contributions.select(query)) {
      u = guild.data;
    }
    res.send(u);
  })
);

// Endpoint to save contribution
app.post(
  '/contribution',
  util.callbackify(async (req, res) => {
    // TODO: I am guessing over 1000 users
    // this will start to become slow
    const contribution = req.body.ActivityType?.id;
    if (!req.body.ActivityType?.id) {
      // contribution = req.body
      // create new guild if this one does not exist
      // create new activity type
      const activity = await createAndGetActivityType(
        req.body.Member[0],
        req.body.ActivityType
      );
      const rep = await contributions.create({
        ...req.body,
        ActivityType: [activity.id],
      });
      console.log(rep);
      return res.send(rep);
    } else {
      const rep = await contributions.create({
        ...req.body,
        ActivityType: [req.body.ActivityType.id],
      });
      console.log(rep);
      return res.send(rep);
    }
  })
);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
console.log('New');
console.log('New 2');
