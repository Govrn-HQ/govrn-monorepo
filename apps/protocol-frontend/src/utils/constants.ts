/* Environment Variables */

export const PROTOCOL_URL = import.meta.env.VITE_PROTOCOL_URL;
export const BASE_URL = import.meta.env.VITE_PROTOCOL_BASE_URL;

export const VERIFY_URL = `${BASE_URL}/verify`;
export const SIWE_ACTIVE_URL = `${BASE_URL}/siwe/active`;

export const BLOCK_EXPLORER_URLS = {
  gnosisChain: `https://blockscout.com/xdai/mainnet/tx/`,
};

/* Project Related Constants */

export const UNASSIGNED = 'Unassigned';
export const GOVRN_MOTTO = 'Track and record your DAO Contributions.';
