import {
  createWaitlistFormValidation,
  profileFormValidation,
} from '../utils/validations';
import type { InferType } from 'yup';

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

export type DaoCsvImportFormValues = {
  csv?: File;
};

export type CreateUserFormValues = Partial<
  InferType<typeof createWaitlistFormValidation>
>;

export type ProfileFormValues = Partial<
  InferType<typeof profileFormValidation>
>;
