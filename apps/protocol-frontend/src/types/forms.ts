import {
  createWaitlistFormValidation,
  profileFormValidation,
} from '../utils/validations';
import type { InferType } from 'yup';

// contribution forms
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

// profile forms

export type CreateUserFormValues = Partial<
  InferType<typeof createWaitlistFormValidation>
>;

export type ProfileFormValues = Partial<
  InferType<typeof profileFormValidation>
>;

// dao membership forms

export type DaoTextareaFormValues = {
  daoMemberAddresses?: string;
  guildName?: string;
};

export type DaoCsvImportFormValues = {
  daoCsvFile: FileList;
};

export type DaoUpdateValues = {
  userId?: number;
  guildId: number;
  name?: string;
};

export type DaoNameUpdateFormValues = {
  daoName?: string;
};

export type DaoUserCreateValues = {
  userId?: number;
  guildId?: number;
  guildName?: string;
  userAddress?: string;
  membershipStatus?: string;
};
