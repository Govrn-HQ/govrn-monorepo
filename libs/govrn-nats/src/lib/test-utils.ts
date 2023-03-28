import { connect, AckPolicy, JetStreamClient } from 'nats';
import { v4 as uuidv4 } from 'uuid';

export const setupJetstream = async (subjects: string[]) => {
  const nc = await connect({ servers: 'localhost' });
  const uuid = uuidv4().toString();

  const stream = `stream-${uuid}`;
  const durable = `me-${uuid}`;

  const jsm = await nc.jetstreamManager();
  const streams = await jsm.streams.list();
  for await (const stream of streams) {
    await jsm.streams.delete(stream.config.name);
  }

  // TODO: What does this do
  await jsm.streams.add({ name: stream, subjects: subjects });
  // TODO: What does this do
  await jsm.consumers.add(stream, {
    durable_name: durable,
    ack_policy: AckPolicy.Explicit,
  });
  const js = nc.jetstream();
  return {
    jetstream: js,
    jetstreamManager: jsm,
    natsConnection: nc,
    durableName: durable,
    streamName: stream,
  };
};

export const publishTestMessages = async <T>(
  numMsg: number,
  js: JetStreamClient,
  subscription: string,
  data: T,
) => {
  for (let i = 0; i < numMsg; i++) {
    await js.publish(subscription, Buffer.from(JSON.stringify(data)), {});
  }
};
