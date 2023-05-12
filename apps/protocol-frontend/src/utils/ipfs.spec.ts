import { ipfsToHttp } from './ipfs';

describe('ipfs', () => {
  it('should convert a valid IPFS URL to a HTTP URL', () => {
    const ipfs = 'ipfs://Qm...';
    const http = 'https://ipfs.io/ipfs/Qm...';
    expect(ipfsToHttp(ipfs)).toEqual(http);
  });

  it('should not convert a non-IPFS URL', () => {
    const url = 'https://example.com';
    expect(ipfsToHttp(url)).toEqual(url);
  });
});
