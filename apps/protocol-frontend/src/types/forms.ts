export type ContributionFormValues = {
  name?: string;
  activityType?: string;
  details?: string;
  proof?: string;
  daoId?: string | null | number;
  engagementDate?: Date | string | number;
};

export type BulkDaoAttributeFormValues = {
  daoId?: string | number | null;
};

export type CreateUserFormValues = {
  username?: string;
  email?: string;
};

export type ProfileFormValues = {
  address?: string;
  name?: string;
};
