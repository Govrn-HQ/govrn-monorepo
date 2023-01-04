import { describe, expect, test } from '@jest/globals';
import { NatsConnection } from 'nats';
import { setupNats } from '../nats';

describe('connect to nats', () => {
  test('test schema matches type', async () => {
    let count = 0;
    const logic = async (nc: NatsConnection) => {
      count += 1;
      return;
    };
    await setupNats([{ servers: 'localhost' }], logic);
    expect(count).toBe(1);
  });
});
