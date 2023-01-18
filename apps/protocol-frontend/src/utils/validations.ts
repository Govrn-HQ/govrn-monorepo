import * as yup from 'yup';
import { ethers } from 'ethers';
import { splitEntriesByComma } from '../utils/arrays';

// Helpers

export const isEthAddress = (item: unknown): item is `0x${string}` =>
  typeof item === 'string' && ethers.utils.isAddress(item);

// custom yup validation methods

yup.addMethod(yup.string, 'ethAddress', function format(formats, parseStrict) {
  return this.transform((value, originalValue, ctx) => {
    return value.isValid() ? value.toDate() : new Date('');
  });
});
// parsedDaoMemberAddresses.every(isEthAddress)
// Specific Form Validations

// export const daoTextareaFormValidation = yup.object({
//   daoMemberAddresses: yup
//     .array()
//     .min(1, 'Need to include at least one address.')
//     .required('This field is required.'),
// });

// export const daoTextareaFormValidation = yup.object({
//   daoMemberAddresses: yup.array(
//     yup.string().required('This field is required.'),
//   ),
// });

// parsedDaoMemberAddresses = splitEntriesByComma(daoMemberAddresses);
// !parsedDaoMemberAddresses.every(isEthAddress)

export const daoTextareaFormValidation = yup.object({
  daoMemberAddresses: yup
    .string()
    .min(1, 'Need to include at least one address.')
    .test('isEthAddress', 'Invalid addresses included in the list.', value => {
      if (value) {
        const parsedDaoMemberAddresses = splitEntriesByComma(value);
        return parsedDaoMemberAddresses.every(isEthAddress);
      }
    })
    .required('This field is required.'),
});

export const profileFormValidation = yup.object({
  name: yup.string(),
});

export const linearFormValidation = yup.object({
  userLinearEmail: yup
    .string()
    .email('Please enter a valid email address.')
    .required('This field is required.'),
});

export const createUserFormValidation = yup.object({
  username: yup.string().required('This field is required.'),
});

export const createWaitlistFormValidation = yup
  .object({
    username: yup.string().required('This field is required.'),
    email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('This field is required.'),
  })
  .required();

export const attestationFormValidation = yup.object({
  username: yup.string().required('This field is required.'),
});

export const editContributionFormValidation = yup.object({
  // username: yup.string().required('This field is required.'),
});

export const reportFormValidation = yup.object({
  name: yup.string().required('Contribution Name is required.'),
  engagementDate: yup.date().required('Engagement Date is required.'),
  activityType: yup.string().nullable().required('Activity Type is required.'),
});

export const addAttestationFormValidation = yup.object({
  // username: yup.string().required('This field is required.'),
});
