import * as yup from 'yup';

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
  // discord: yup
  //   .string()
  //   .min(2, 'Discord username must be at least 2 characters.')
  //   .max('32', 'Discord username must be less than 32 characters.'),
  // twitter: yup.string(),
  // discourse: yup.string(),
});

export const attestationFormValidation = yup.object({
  username: yup.string().required('This field is required.'),
});

export const editContributionFormValidation = yup.object({
  // username: yup.string().required('This field is required.'),
});

export const reportFormValidation = yup.object({
  name: yup.string().required('This field is required.'),
  engagementDate: yup.date(),
});

export const addAttestationFormValidation = yup.object({
  // username: yup.string().required('This field is required.'),
});
