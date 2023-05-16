import { GovrnTheme } from '@govrn/protocol-ui';

/* Environment Variables */
export const INFURA_PROJECT_SECRET = import.meta.env.VITE_INFURA_PROJECT_SECRET;
export const INFURA_PROJECT_ID = import.meta.env.VITE_INFURA_PROJECT_ID;
export const PROTOCOL_URL = import.meta.env.VITE_PROTOCOL_URL;
export const BASE_URL = import.meta.env.VITE_PROTOCOL_BASE_URL;
export const ALCHEMY_KEY = import.meta.env.VITE_PUBLIC_ALCHEMY_KEY;
export const VERIFY_URL = `${BASE_URL}/verify`;
export const SIWE_ACTIVE_URL = `${BASE_URL}/siwe/active`;
export const BLOCK_EXPLORER_URLS = {
  gnosisChain: `https://blockscout.com/xdai/mainnet/tx/`,
};
export const BACKEND_ADDR = `${BASE_URL}`;
export const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
export const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
export const LINEAR_CLIENT_ID = import.meta.env.VITE_LINEAR_CLIENT_ID;
export const LINEAR_REDIRECT_URI = import.meta.env.VITE_LINEAR_REDIRECT_URI;
export const MAX_FILE_UPLOAD_SIZE = 5242880; // 5MB in bytes. used in ipfs upload
export const MAX_CSV_UPLOAD_SIZE = 5242880; // 5MB in bytes. used in csv upload
export const UNASSIGNED = 'Unassigned';
export const GOVRN_MOTTO = 'Track and record your DAO Contributions.';
export const DEFAULT_ACTIVITY_TYPES = [
  'Pull Request',
  'Documentation',
  'Note Taking',
  'Design',
  'Other',
];

export const DEFAULT_ACTIVITY_TYPES_OPTIONS = {
  label: 'Default',
  options: DEFAULT_ACTIVITY_TYPES.map(activity => {
    return {
      label: activity,
      value: activity,
    };
  }),
};

export const ADDRESS_IMPORT_MAX = 1000;

export const ATTESTATION_VERIFIED_FILTER_OPTIONS = [
  'showAll',
  'showVerified',
  'showUnverified',
];

const primaryBrandColorsFromTheme: string[] = Object.values(
  GovrnTheme.colors.brand.primary,
); // can change this to be primary or secondary, or use to map any color specrum in theme
export const BRAND_COLOR_MAP = primaryBrandColorsFromTheme;
export const BRAND_COLOR_MAP_SUBSET = BRAND_COLOR_MAP.slice(3, 8); // omits the extreme light and dark colors for our graphs
export const CONTRIBUTION_NEW_DOMAIN = 'contribution.new';
export const CONTRIBUTION_NEW_STAGING_DOMAIN = 'staging.contribution.new';

/* Time Values For Date Ranges */

export const TODAY_DATE = new Date();
export const WEEK = 1;
export const MONTH = 4;
export const QUARTER = 12;
export const YEAR_WEEKS = 52;
export const DEFAULT_DATE_RANGES = [
  { label: 'Last Week', value: WEEK },
  { label: 'Last Month', value: MONTH },
  { label: 'Last Quarter', value: QUARTER },
  { label: 'Last Year', value: YEAR_WEEKS },
];

/* Social Media Links */

export const TWITTER_LINK = 'https://twitter.com/govrnHQ';
export const DISCORD_LINK = 'https://discord.gg/3e36ZHU5aG';
export const FEEDBACK_LINK = 'https://forms.gle/uE8w3FgjAcWyqAN58';
export const DOCS_LINK =
  'https://govrn.gitbook.io/govrn-docs/overview/welcome-to-govrn';

/**
 * Membership Names that represents different membership statuses in a DAO.
 */
export enum MembershipStatusesNames {
  // Indicates that the user has left the DAO.
  Left = 'Left',
  // Indicates that the user is an Admin of the DAO.
  Admin = 'Admin',
  // Indicates that the user is a Member of the DAO.
  Member = 'Member',
  // Indicates that the user is a Recruit of the DAO.
  Recruit = 'Recruit',
}

export const VERIFIED_CONTRIBUTION_NAME = 'Verified';
