import * as express from 'express';
import { loadContributions, requestSchema } from './subgraph';
import { transform } from './json-ld';

const app = express();

app
  .use('/api', (req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
  })
  .get('/api', async (req, res) => {
    try {
      const query = await requestSchema.validate(req.query);
      const event = await loadContributions(query);
      // json > json-ld
      const transformed = await transform(event, query.address);
      res.send(JSON.stringify(transformed));
    } catch (e) {
      console.error(e);
      res.status(500).send({ error: e?.message ?? 'Error happened!' });
    }
  });

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
