import * as express from 'express';
import { loadContributions } from './subgraph';
import { transform } from './json-ld';

const app = express();

app
  .use('/api', (req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
  })
  .get('/api', async (req, res) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    console.dir({ page, limit });
    const event = await loadContributions({ page: null, limit });
    // json > json-ld
    const transformed = await transform(event);
    res.send(JSON.stringify(transformed));
  });

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
