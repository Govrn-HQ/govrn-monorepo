// Create individual input rules
// Create more generic user and admin rulesj
import { inputRule } from 'graphql-shield';

export const createUserAttestationInput = inputRule()(
  yup =>
    yup.object({
      address: yup.string().required(),
      chainName: yup.string().required(),
      confidenceName: yup.string().required(),
      contributionId: yup.number().required(),
      userId: yup.number().required(),
    }),
  { abortEarly: false },
);

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
      data: yup.object({
        activityTypeName: yup.string().required(),
        address: yup.string().required(),
        chainId: yup.number().nullable(),
        chainName: yup.string().required(),
        dateOfEngagement: yup.date().required(),
        details: yup.string().ensure(),
        guildId: yup.number(),
        name: yup.string().ensure(),
        proof: yup.string().ensure(),
        status: yup
          .string()
          .matches(/(staging)/, { excludeEmptyString: true })
          .required(),
        userId: yup.number().required(),
      }),
    }),
  { abortEarly: false },
);

export const createUserCustomInput = inputRule()(
  yup =>
    yup.object({
      data: yup.object({
        address: yup.string().required(),
        email: yup.string().email(),
        username: yup.string().required(),
      }),
    }),
  { abortEarly: false },
);

export const createUserOnChainAttestationInput = inputRule()(
  yup =>
    yup.object({
      data: yup.object({
        chainId: yup.number().required(),
        confidence: yup.string().required(),
        contributionOnChainId: yup.number().required(),
        userId: yup.number().required(),
      }),
    }),
  { abortEarly: false },
);

export const deleteUserContributionInput = inputRule()(
  yup =>
    yup.object({
      where: yup.object({
        contributionId: yup.number().required(),
      }),
    }),
  { abortEarly: false },
);
