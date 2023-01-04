import { describe, expect, test } from '@jest/globals';
import { NatsConnection, connect, AckPolicy } from 'nats';
import { setupNats } from '../nats';

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
describe('test pull message', async () => {
  const nc = await connect({ servers: 'localhost' });

  const jsm = await nc.jetstreamManager();
  // TODO: What does this do
  await jsm.streams.add({ name: 'stream', subjects: ['hello.>'] });
  // TODO: What does this do
  await jsm.consumers.add('stream', {
    durable_name: 'me',
    ack_policy: AckPolicy.Explicit,
  });
  const js = nc.jetstream();

  const pa = await js.publish(
    'hello.world',
    Buffer.from(JSON.stringify({ count: 0 })),
    {
      expect: { lastSequence: 0 },
    },
  );
  console.log();

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
