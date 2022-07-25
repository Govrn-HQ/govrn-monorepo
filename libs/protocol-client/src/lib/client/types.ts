export type ContributionItem = {
  date_of_engagement: string;
  date_of_submission: string;
  details?: string | null;
  id: number;
  name: string;
  proof?: string | null;
  updatedAt: string;
  on_chain_id?: number | null;
  activity_type: {
    active: boolean;
    createdAt: string;
    id: number;
    name: string;
    updatedAt: string;
  };
  status: { createdAt: string; id: number; name: string; updatedAt: string };
  user: {
    address: string;
    createdAt: any;
    display_name?: string | null;
    full_name?: string | null;
    id: number;
    name?: string | null;
    updatedAt: string;
  };
  attestations?: Array<{
    id: number;
    user_id: number;
    date_of_attestation: string;
  }>;
  guilds: Array<{ guild: { id: number; name?: string | null } }>;
};

export type UserData = {
  address: string;
  active: boolean;
  createdAt: string;
  display_name?: string | null;
  full_name?: string | null;
  id: number;
  name?: string | null;
  updatedAt: string;
  chain_type: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
};
