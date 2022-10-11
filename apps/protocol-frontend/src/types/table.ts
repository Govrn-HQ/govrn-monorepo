import { ReactNode } from 'react';

export type ContributionTableType = {
  name: string;
  txHash?: string | null;
  id: number;
  details?: string | null;
  proof?: string | null;
  date_of_submission: Date | string;
  engagementDate: Date | string;
  attestations: {
    id: number;
  }[];
  user: {
    id: number;
  };
  activityTypeId: number;
  status: {
    id: number;
    name: string;
  };
  action: string;
  guildName: string;
};

export type AttestationTableType = {
  id: number;
  status: string;
  contributor?: string | null;
  date_of_submission: string | Date;
  date_of_engagement: string | Date;
  attestations?: {
    id: number;
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
