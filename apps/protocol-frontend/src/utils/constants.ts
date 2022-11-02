/* Environment Variables */

export const PROTOCOL_URL = import.meta.env.VITE_PROTOCOL_URL;
export const BASE_URL = import.meta.env.VITE_PROTOCOL_BASE_URL;
export const VERIFY_URL = `${BASE_URL}/verify`;
export const SIWE_ACTIVE_URL = `${BASE_URL}/siwe/active`;
export const BLOCK_EXPLORER_URLS = {
  gnosisChain: `https://blockscout.com/xdai/mainnet/tx/`,
};

/* Project Related Constants */

export const MAX_FILE_UPLOAD_SIZE = 5000000; // 5MB
export const UNASSIGNED = 'Unassigned';
export const GOVRN_MOTTO = 'Track and record your DAO Contributions.';
export const DEFAULT_ACTIVITY_TYPES = [
  'Pull Request',
  'Documentation',
  'Note Taking',
  'Design',
  'Other',
];
export const brandColorMap = [
  '#ffb4e2',
  '#fb84ce',
  '#f854ba',
  '#f526a6',
  '#db0f8d',
  '#ab076d',
  '#76024e',
];

/* Time Values For Date Ranges */

export const TODAY_DATE = new Date();
export const WEEK = 1;
export const MONTH = 4;
export const QUARTER = 12;
export const YEAR = 52;
export const DEFAULT_DATE_RANGES = [
  { value: WEEK, label: 'Last Week' },
  { value: MONTH, label: 'Last Month' },
  { value: QUARTER, label: 'Last Quarter' },
  { value: YEAR, label: 'Last Year' },
];

/* Social Media Links */

export const TWITTER_LINK = 'https://twitter.com/govrnHQ';
export const DISCORD_LINK = 'https://discord.gg/3e36ZHU5aG';
export const FEEDBACK_LINK = 'https://forms.gle/uE8w3FgjAcWyqAN58';
