import * as yup from 'yup';

export const profileFormValidation = yup.object({
  userEmail: yup
    .string()
    .email('Please enter a valid email address.')
    .required('This field is required.'),
});
