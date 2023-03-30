import {
  AckPolicy,
  connect,
  JsMsg,
  nanos,
  NatsConnection,
  StringCodec,
} from 'nats';

/**
 * A helper function to setup a connection to NATS and create a stream to upload messages,
 * trying to connect to each server in the `servers` array.
 * Once connected, it creates a stream with the specified `streamName`.
 *
 * @param servers - an array of servers to connect.
 * @param streamName - the name (subject) of the stream to create.
 * @param work - a callback function to perform  further actions with the connection.
 */
export const setupNats = async (
  servers: { servers?: string; port?: number }[],
  streamName: string,
  work: (conn: NatsConnection) => Promise<void>,
) => {
  for (const v of servers) {
    try {
      const nc = await connect(v);
      console.log(`connected to ${nc.getServer()}`);

      // create a stream to upload messages
      const jsm = await nc.jetstreamManager();
      const subj = `${streamName}.*`;
      const streamCfg = await jsm.streams.add({
        name: streamName,
        subjects: [subj],
      });
      console.log(`created stream ${streamCfg}`);

      // this promise indicates the client closed
      const isClosed = nc.closed();
      // do something with the connection
      await work(nc);

      await nc.close();
      // check if the close was OK
      const err = await isClosed;
      if (err) {
        console.log(`error closing:`, err);
      }
    } catch (err) {
      console.log(err);
      console.log(`error connecting to ${JSON.stringify(v)}`);
    }
  }
};

/**
 * A helper function to write messages to a stream, creating a `JetStreamClient`
 * and publishing given `messages` to it.
 *
 * @param nc - the connection to use.
 * @param streamName - the name of the stream to write to.
 * @param messages
 */
export const writeMessages = async (
  nc: NatsConnection,
  streamName: string,
  messages: string[],
) => {
  const js = nc.jetstream();
  const sc = StringCodec();

  for (const m of messages) {
    const pubAck = await js.publish(`${streamName}.row`, sc.encode(m));
    console.log(
      `Published message ${m} to ${pubAck.stream}, seq ${pubAck.seq}`,
    );
  }
};

/**
 * A helper function to pull messages from a stream, creating a `JetStreamClient`
 * and fetching messages from it. It will call the `callback` function for each
 * message received.
 *
 * @param nc
 * @param stream
 * @param durable - A unique identifier that helps `JetStream` maintain the
 *                  consumer's state across sessions. {@link https://docs.nats.io/legacy/stan/intro/channels/subscriptions/durable Concept}
 * @param callback
 * @param expires
 * @param batch
 */
export const pullMessages = async (
  nc: NatsConnection,
  stream: string,
  durable: string,
  callback: (nc: NatsConnection, msg: JsMsg) => Promise<void>,
  expires = 5000,
  batch = 10,
) => {
  console.log(`:: PULLING MESSAGES FROM ${stream} WITH DURABLE ${durable}`);
  const js = nc.jetstream();

  // create a pull-based, durable subscription. server will remember the last message
  // it sent and will resume from there. It's more efficient than using `fetch`.
  const subscription = await js.pullSubscribe(`${stream}.row`, {
    mack: true,
    config: {
      durable_name: durable,
      ack_policy: AckPolicy.Explicit,
      ack_wait: nanos(4000),
    },
  });

  const done = (async () => {
    await subscription.pull({ no_wait: true, batch, expires });
    for await (const m of subscription) {
      console.log(`Received message ${m.data}`);
      await callback(nc, m);
      m.ack();
    }
  })();

  await done;
  subscription.unsubscribe();
};
