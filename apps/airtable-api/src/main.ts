import util = require('util');
import cors = require('cors');
import * as express from 'express';
import { GovrnProtocol, SortOrder } from '@govrn/protocol-client';

// Express
const app = express();
app.use(express.json());
app.use(cors());

const PROTOCOL_URL = process.env.PROTOCOL_URL;
const API_TOKEN = process.env.API_TOKEN;

// Endpoint to fetch users
app.get(
  '/users',
  util.callbackify(async (req, res) => {
    const govrn = new GovrnProtocol(PROTOCOL_URL, undefined, {
      Authorization: API_TOKEN,
    });
    const users = await govrn.user.list({
      orderBy: { full_name: SortOrder.Asc },
      where: {
        guild_users: {
          some: { guild_id: { equals: parseInt(req.query.guild_id) } },
        },
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
  const govrn = new GovrnProtocol(PROTOCOL_URL, undefined, {
    Authorization: API_TOKEN,
  });
  const guild_id = parseInt(req.query.guild_id.toString());
  const user_id = parseInt(req.query.user_id.toString());
  const activityTypes = await govrn.activity_type.list({
    first: 1000,
    orderBy: { name: SortOrder.Asc },
    where: {
      OR: [
        {
          guilds: {
            some: { guild_id: { equals: guild_id } },
          },
        },
        { users: { some: { user_id: { equals: user_id || 0 } } } },
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
    const govrn = new GovrnProtocol(PROTOCOL_URL, undefined, {
      Authorization: API_TOKEN,
    });
    const g = await govrn.guild.get({ id: parseInt(req.query.guild_id) });
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
    const govrn = new GovrnProtocol(PROTOCOL_URL, undefined, {
      Authorization: API_TOKEN,
    });
    const label = req.body.ActivityType.label
      ? req.body.ActivityType.label
      : req.body.ActivityType;
    const g = await govrn.contribution.create({
      data: {
        activity_type: {
          connectOrCreate: {
            create: {
              name: label,
            },
            where: {
              name: label,
            },
          },
        },
        name: label,
        date_of_engagement: req.body.DateOfEngagement,
        details: req.body.Description,
        status: {
          connect: {
            name: 'staging',
          },
        },
        user: {
          connect: {
            id: req.body.user_id,
          },
        },
        guilds: {
          create: [
            {
              guild: {
                connect: {
                  id: parseInt(req.body.guild_id),
                },
              },
            },
          ],
        },
      },
    });
    if (!req.body.ActivityType.label) {
      await govrn.activity_type.userCreate({
        data: {
          user: { connect: { id: req.body.user_id } },
          activity_type: { connect: { id: g.activity_type.id } },
        },
      });
    }
    res.send(g);
  })
);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
