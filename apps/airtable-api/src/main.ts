import util = require('util');
import tslib = require('tslib');
import cors = require('cors');
import * as express from 'express';
import { GovrnProtocol } from '@govrn/protocol-client';

const app = express();
app.use(express.json());
app.use(cors());

const PROTOCOL_URL = process.env.PROTOCOL_URL;

// Endpoint to fetch users
app.get(
  '/users',
  util.callbackify(async (req, res) => {
    // TODO: I am guessing over 1000 users
    // this will start to become slow
    const govrn = new GovrnProtocol(PROTOCOL_URL);
    const users = await govrn.user.list({
      where: {
        guild_users: { every: { guild_id: { equals: req.query.guild_id } } },
      },
      first: 1000,
    });
    res.send(users);
  })
);

// Endpoint to contribution types
// Activity type list
app.get('/contribution/types', async (req, res) => {
  // TODO: I am guessing over 1000 users
  // this will start to become slow
  const govrn = new GovrnProtocol(PROTOCOL_URL);
  const guild_id = parseInt(req.query.guild_id.toString());
  const user_id = parseInt(req.query.user_id.toString());
  const activityTypes = await govrn.activity_type.list({
    first: 1000,
    where: {
      OR: [
        {
          guilds: {
            every: { guild_id: { equals: guild_id } },
          },
        },
        { users: { every: { user_id: { equals: user_id } } } },
      ],
    },
  });
  res.send(activityTypes);
});

// Endpoint to fetch guild metadata
app.get(
  '/guild',
  util.callbackify(async (req, res) => {
    // TODO: I am guessing over 1000 users
    // this will start to become slow
    const govrn = new GovrnProtocol(PROTOCOL_URL);
    const g = await govrn.guild.get({ id: req.query.guild_id });
    res.send(g);
  })
);

// Endpoint to fetch guild metadata
//app.get(
//  '/contribution',
//  util.callbackify(async (req, res) => {
//    // TODO: I am guessing over 1000 users
//    // this will start to become slow
//    const query = {
//      filterByFormula: [
//        '=',
//        { field: 'member' },
//        req.query.guild_id,
//      ] as Formula,
//    };
//
//    let u = {};
//    for await (const guild of contributions.select(query)) {
//      u = guild.data;
//    }
//    res.send(u);
//  })
//);

// Endpoint to save contribution
app.post(
  '/contribution',
  util.callbackify(async (req, res) => {
    // TODO: I am guessing over 1000 users
    // this will start to become slow
    const govrn = new GovrnProtocol(PROTOCOL_URL);
    govrn.contribution.create({
      data: {
        activity_type: {
          connectOrCreate: {
            create: {
              name: req.body.ActivityType,
              users: {
                connect: [
                  {
                    id: req.body.user_id,
                  },
                ],
              },
            },
            where: {
              name: req.body.ActivityType,
            },
          },
        },
        name: req.body.ActivityType,
        date_of_engagement: req.body.DateOfEngagement,
        details: req.body.Description,
        status: {
          connect: {
            name: 'staged',
          },
        },
        user: {
          connect: {
            id: req.body.user_id,
          },
        },
      },
    });
  })
);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
