/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { loadContributions } from './subgraph';
import { transform } from './json-ld';

const app = express();

app.use('/api', (req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

app.get('/api', async (req, res) => {
  const event = await loadContributions();
  // json > json-ld
  const transformed = await transform(event);
  res.send(JSON.stringify(transformed));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
