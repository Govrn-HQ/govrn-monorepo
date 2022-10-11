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
