import { govrnContractClient } from './govrn-contract-client';

describe('govrnContractClient', () => {
  it('should work', () => {
    expect(govrnContractClient()).toEqual('govrn-contract-client');
  });
});
