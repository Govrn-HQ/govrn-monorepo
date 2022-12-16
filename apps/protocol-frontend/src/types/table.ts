import { ReactNode } from 'react';

export type AttestationTableType = {
  id: number;
  status: string;
  contributor?: string | null;
  date_of_submission: string | Date;
  date_of_engagement: string | Date;
  attestations?: {
    id: number;
    attestation_status?: {
      id: number;
      name: string;
    } | null;
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
