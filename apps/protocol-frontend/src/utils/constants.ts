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
export const DEFAULT_ACTIVITY_TYPES = [
  'Pull Request',
  'Documentation',
  'Note Taking',
  'Design',
  'Other',
];

/* Social Media Links */

export const TWITTER_LINK = 'https://twitter.com/govrnHQ';
export const DISCORD_LINK = 'https://discord.gg/3e36ZHU5aG';
export const FEEDBACK_LINK = 'https://forms.gle/uE8w3FgjAcWyqAN58';
