export type ContributionItem = {
  date_of_engagement: any;
  date_of_submission: any;
  details?: string | null;
  id: number;
  name: string;
  proof?: string | null;
  updatedAt: any;
  on_chain_id?: number | null;
  activity_type: {
    active: boolean;
    createdAt: any;
    id: number;
    name: string;
    updatedAt: any;
  };
  status: { createdAt: any; id: number; name: string; updatedAt: any };
  user: {
    address: string;
    createdAt: any;
    display_name?: string | null;
    full_name?: string | null;
    id: number;
    name?: string | null;
    updatedAt: any;
  };
  attestations: Array<{
    id: number;
    user_id: number;
    date_of_attestation: any;
  }>;
  guilds: Array<{ guild: { id: number; name?: string | null } }>;
};
