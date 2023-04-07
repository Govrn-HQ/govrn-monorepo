import { govrnNats } from './govrn-nats';

describe('govrnNats', () => {
  it('should work', () => {
    expect(govrnNats()).toEqual('govrn-nats');
  });
});
