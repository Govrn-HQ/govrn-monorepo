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

export const updateUserContributionInput = inputRule()(
  yup =>
    yup.object({
      data: yup.object({
        activityTypeName: yup.string().required(),
        address: yup.string().required(),
        chainName: yup.string().required(),
        contributionId: yup.number().required(),
        contributionUserAddress: yup.string(),
        currentGuildId: yup.number(),
        dateOfEngagement: yup.date().required(),
        details: yup.string(),
        guildId: yup.number().nullable(),
        name: yup.string().required(),
        proof: yup.string(),
        status: yup.string().required(),
        userId: yup.number().required(),
      }),
    }),
  { abortEarly: false },
);

export const updateUserCustomInput = inputRule()(
  yup =>
    yup.object({
      data: yup.object({
        disconnectLinearId: yup.string(),
        id: yup.number().required(),
        name: yup.string().required(),
      }),
    }),
  { abortEarly: false },
);
export const updateUserOnChainAttestationInput = inputRule()(
  yup =>
    yup.object({
      id: yup.number().required(),
      status: yup
        .string()
        .matches(/(pending|attested)/, { excludeEmptyString: true })
        .required(),
      data: yup.object({
        createdAt: yup.date(),
        updatedAt: yup.date(),
        date_of_attestation: yup.date(),
      }),
    }),
  { abortEarly: false },
);

export const updateUserOnChainContributionInput = inputRule()(
  yup =>
    yup.object({
      id: yup.number().required(),
      status: yup
        .string()
        .matches(/(pending|minted)/, { excludeEmptyString: true })
        .required(),
      chainId: yup.number().required(),
      data: yup.object({
        date_of_engagement: yup.object({ set: yup.date() }),
        date_of_submission: yup.object({ set: yup.date() }),
        details: yup.object({ set: yup.string() }),
        name: yup.object({ set: yup.string() }),
        on_chain_id: yup.object({ set: yup.number() }),
        proof: yup.object({ set: yup.string() }),
        tx_hash: yup.object({ set: yup.string() }),
        updatedAt: yup.object({ set: yup.date() }),
      }),
    }),
  { abortEarly: false },
);
