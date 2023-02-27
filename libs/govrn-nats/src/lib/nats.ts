import { connect, NatsConnection, JsMsg } from 'nats';

// TODO: How are streams created
// TODO: How is pulling filtered
export const setupNats = async (
  servers: { servers?: string; port?: number }[],
  work: (conn: NatsConnection) => Promise<void>,
) => {
  for (const v of servers) {
    try {
      const nc = await connect(v);
      console.log(`connected to ${nc.getServer()}`);
      // this promise indicates the client closed
      const done = nc.closed();
      // do something with the connection
      await work(nc);

      // close the connection
      await nc.close();
      // check if the close was OK
      const err = await done;
      if (err) {
        console.log(`error closing:`, err);
      }
    } catch (err) {
      console.log(`error connecting to ${JSON.stringify(v)}`);
    }
  }
};

// subscription is a durable queue group
export const pullMessages = async (
  nc: NatsConnection,
  stream: string,
  durable: string,
  callback: (nc: NatsConnection, msg: JsMsg) => void,
  expires = 5000,
  batch = 10,
) => {
  // create a jetstream client:
  const js = nc.jetstream();
  // To get multiple messages in one request you can:
  const msgs = await js.fetch(stream, durable, {
    batch: batch,
    expires: expires,
  });
  // the request returns an iterator that will get at most 10 messages or wait
  // for 5000ms for messages to arrive.

  const done = (async () => {
    for await (const m of msgs) {
      // do something with the message
      await callback(nc, m);
      m.ack();
    }
  })();
  // The iterator completed,
  await done;
};

export class Job {
  nc = null;
  server = null;
  constructor(server: string) {
    this.server = server;
    // set props normally
    // nothing async can go here
  }
  public async run() {
    // this.nc = await setupNats(this.server);
  }
}
