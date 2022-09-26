import { SiweMessage } from 'siwe';

const BACKEND_ADDR = `${import.meta.env.VITE_PROTOCOL_BASE_URL}`;

export async function createSiweMessage(
  address: string,
  statement: string,
  chainId: string,
  // provider: ethers.providers.Web3Provider
) {
  // const signer = provider.getSigner();
  const domain = window.location.host;
  const origin = window.location.origin;
  try {
    const res = await fetch(`${BACKEND_ADDR}/nonce`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(res);
    const message = new SiweMessage({
      domain,
      address,
      statement,
      uri: origin,
      version: '1',
      chainId: parseInt(chainId),
      nonce: await res.text(),
      expirationTime: new Date(Date.now() + 1 * 86400000).toISOString(),
    });
    return message.prepareMessage();
  } catch (e) {
    console.error(e);
    return;
  }
}
