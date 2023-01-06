import { describe, expect, test } from '@jest/globals';
import { NatsConnection, connect, AckPolicy, JsMsg } from 'nats';
import { setupNats, pullMessages } from '../nats';

describe('connect to nats', () => {
  test('test logic runs', async () => {
    let count = 0;
    const logic = async (nc: NatsConnection) => {
      count += 1;
      return;
    };
    await setupNats([{ servers: 'localhost' }], logic);
    expect(count).toBe(1);
  });
});

// 1. Test jeststream messages are fetched
// 2. Test jeststrem messages are acknowledged
// 3. Test jestream messages are run in the callback
describe('test pull message', () => {
  test('test pulled', async () => {
    const nc = await connect({ servers: 'localhost' });
    const stream = 'stream';
    const durable = 'me';

    const jsm = await nc.jetstreamManager();
    // TODO: What does this do
    await jsm.streams.add({ name: stream, subjects: ['hello.>'] });
    // TODO: What does this do
    await jsm.consumers.add(stream, {
      durable_name: 'me',
      ack_policy: AckPolicy.Explicit,
    });
    const js = nc.jetstream();

    const increment = 2;
    await js.publish(
      'hello.world',
      Buffer.from(JSON.stringify({ count: increment })),
      {},
    );

    let count = 0;
    const logic = async (nc: NatsConnection, m: JsMsg) => {
      const msg = JSON.parse(m.data.toString()) as { count: number };
      count += msg.count;
      return;
    };
    await pullMessages(nc, stream, durable, logic, 500);
    expect(count).toBe(increment);
  });
  test('test didAck', async () => {
    const nc = await connect({ servers: 'localhost' });
    const stream = 'stream';
    const durable = 'me';

    const jsm = await nc.jetstreamManager();
    // TODO: What does this do
    await jsm.streams.add({ name: stream, subjects: ['hello.>'] });
    // TODO: What does this do
    await jsm.consumers.add(stream, {
      durable_name: 'me',
      ack_policy: AckPolicy.Explicit,
    });
    const js = nc.jetstream();

    await js.publish(
      'hello.world',
      Buffer.from(JSON.stringify({ count: 0 })),
      {},
    );

    let msg = null;
    const logic = async (nc: NatsConnection, m: JsMsg) => {
      msg = m;
      return;
    };
    await pullMessages(nc, stream, durable, logic, 500);
    expect(msg.didAck).toBe(true);
  });
  test('pull batch', async () => {
    const nc = await connect({ servers: 'localhost' });
    const stream = 'stream';
    const durable = 'me';

    const jsm = await nc.jetstreamManager();
    // TODO: What does this do
    await jsm.streams.add({ name: stream, subjects: ['hello.>'] });
    // TODO: What does this do
    await jsm.consumers.add(stream, {
      durable_name: 'me',
      ack_policy: AckPolicy.Explicit,
    });
    const js = nc.jetstream();

    for (let i = 0; i < 5; i++) {
      await js.publish(
        'hello.world',
        Buffer.from(JSON.stringify({ count: 1 })),
        {},
      );
    }

    let count = 0;
    const logic = async (nc: NatsConnection, m: JsMsg) => {
      const msg = JSON.parse(m.data.toString()) as { count: number };
      count += msg.count;
      return;
    };
    await pullMessages(nc, stream, durable, logic, 5000, 5);
    expect(count).toBe(5);
  });
});
