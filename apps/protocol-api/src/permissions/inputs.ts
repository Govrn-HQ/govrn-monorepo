// Create individual input rules
// Create more generic user and admin rulesj
import { inputRule } from 'graphql-shield';

export const createOnChainUserContributionInput = inputRule()(
  yup =>
    yup.object({
      activityTypeId: yup.number().required(),
      chainId: yup.number(),
      dateOfEngagement: yup.date().required(),
      dateOfSubmission: yup.date().required(),
      details: yup.string().required(),
      name: yup.string().required(),
      onChainId: yup.number().required(),
      proof: yup.string().required(),
      status: yup
        .string()
        .matches(/(Pending|Minted)/, { excludeEmptyString: true })
        .required(),
      txHash: yup.string().required(),
      userId: yup.number().required(),
    }),
  { abortEarly: false },
);

export const createUserContributionInput = inputRule()(
  yup =>
    yup.object({
      activityTypeId: yup.number().required(),
      chainId: yup.number(),
      dateOfEngagement: yup.date().required(),
      dateOfSubmission: yup.date().required(),
      details: yup.string().required(),
      name: yup.string().required(),
      onChainId: yup.number().required(),
      proof: yup.string().required(),
      status: yup
        .string()
        .matches(/(Pending|Minted)/, { excludeEmptyString: true })
        .required(),
      txHash: yup.string().required(),
      userId: yup.number().required(),
    }),
  { abortEarly: false },
);
