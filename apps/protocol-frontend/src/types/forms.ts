export type ContributionFormValues = {
  name: string;
  details?: string | null;
  proof?: string | null;
  engagementDate: Date;
  activityType: string;
  daoId?: string | null;
};

export type BulkDaoAttributeFormValues = {
  daoId: string | number | null;
};

export type CreateUserFormValues = {
  address: string;
  username: string;
};

export type ProfileFormValues = {
  address: string;
  name: string;
};
