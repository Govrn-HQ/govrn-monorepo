import { ReactNode } from 'react';

export type ContributionTableType = {
  name: string;
  txHash?: string | null;
  id: number;
  details?: string | null;
  proof?: string | null;
  date_of_submission: Date | string;
  engagementDate: Date | string;
  date_of_engagement: Date | string;
  updatedAt: string | Date;
  attestations: Array<{
    id: number;
    user_id: number;
    date_of_attestation: string | Date;
    user: {
      name?: string | null;
      address: string;
      id: number;
    };
  }>;
  user: {
    address: string;
    createdAt: string | Date;
    display_name?: string | null;
    full_name?: string | null;
    id: number;
    name?: string | null;
    updatedAt: string | Date;
  };
  activityTypeId: number;
  activity_type: {
    active: boolean;
    createdAt: string | Date;
    id: number;
    name: string;
    updatedAt: string | Date;
  };
  status: {
    createdAt: string | Date;
    id: number;
    name: string;
    updatedAt: string | Date;
  };
  action: string;
  guildName: string;
  guilds: Array<{
    id: number;
    guild_id: number;
    guild: {
      id: number;
      name?: string | null;
    };
  }>;
};

export type AttestationTableType = {
  id: number;
  status: string;
  contributor?: string | null;
  date_of_submission: string | Date;
  date_of_engagement: string | Date;
  attestations?: {
    id: number;
    attestation_status: {
      id: number;
      name: string;
    };
  }[];
  guilds?: {
    guild: {
      name?: string | null;
      guild_id?: number;
    };
  }[];
  action?: ReactNode;
  name: string;
  onChainId?: number | null;
};

export type RecentContributionTableType = {
  name: string;
  id: number;
  engagementDate: Date | string;
  user: {
    address: string;
    createdAt: string | Date;
    display_name?: string | null;
    full_name?: string | null;
    id: number;
    name?: string | null;
    updatedAt: string | Date;
  };
  activity_type: {
    active: boolean;
    createdAt: string | Date;
    id: number;
    name: string;
    updatedAt: string | Date;
  };
};
