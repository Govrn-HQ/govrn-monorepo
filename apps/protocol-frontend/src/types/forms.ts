export type ContributionFormValues = {
  name?: string;
  activityType?: string;
  details?: string;
  proof?: string;
  daoId?: string;
  engagementDate?: Date;
};

export type BulkDaoAttributeFormValues = {
  daoId?: string | number | null;
};

export type CreateUserFormValues = {
  username?: string;
}

export type ProfileFormValues = {
  address?: string;
  name?: string;
}
