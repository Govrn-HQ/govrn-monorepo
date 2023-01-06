import { NatsConnection, JsMsg } from 'nats';
import { describe, expect, test } from '@jest/globals';
import { setupNats, pullMessages } from '../nats';
import { setupJetstream, publishTestMessages } from '../test-utils';

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

describe('test pull message', () => {
  let jetstream;

  beforeEach(async () => {
    jetstream = await setupJetstream(['hello.*']);
  });

  afterEach(async () => {
    return jetstream.jetstreamManager.streams.delete(jetstream.streamName);
  });

  test('test pulled', async () => {
    const increment = 2;
    const {
      jetstream: js,
      natsConnection: nc,
      streamName,
      durableName,
    } = jetstream;
    let count = 0;

    await publishTestMessages(2, js, 'hello.world', { count: 1 });

    const logic = async (nc: NatsConnection, m: JsMsg) => {
      const msg = JSON.parse(m.data.toString()) as { count: number };
      count += msg.count;
      return;
    };
    await pullMessages(nc, streamName, durableName, logic, 500);
    expect(count).toBe(increment);
  });

  test('test didAck', async () => {
    const {
      jetstream: js,
      natsConnection: nc,
      streamName,
      durableName,
    } = jetstream;
    let msg = null;

    await publishTestMessages(1, js, 'hello.world', { count: 0 });

    const logic = async (nc: NatsConnection, m: JsMsg) => {
      msg = m;
      return;
    };
    await pullMessages(nc, streamName, durableName, logic, 500);
    expect(msg.didAck).toBe(true);
  });

  test('pull batch', async () => {
    const {
      jetstream: js,
      natsConnection: nc,
      streamName,
      durableName,
    } = jetstream;
    let count = 0;

    await publishTestMessages(5, js, 'hello.world', { count: 1 });

    const logic = async (nc: NatsConnection, m: JsMsg) => {
      const msg = JSON.parse(m.data.toString()) as { count: number };
      count += msg.count;
      return;
    };
    await pullMessages(nc, streamName, durableName, logic, 5000, 5);
    expect(count).toBe(5);
  });
});
