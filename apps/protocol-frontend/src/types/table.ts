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
