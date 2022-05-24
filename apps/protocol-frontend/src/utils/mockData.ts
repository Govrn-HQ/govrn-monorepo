export const mockContributions = [
  {
    id: 1,
    name: 'Contribution Pull Request',
    status: 'Preparing',
    activityType: 'Pull Request',
    submissionDate: '2022-05-03',
    engagementDate: '2022-05-03',
    attestations: {
      1: 'yes',
      2: 'yes',
      3: 'yes',
    },
    verificationLevel: 1,
    guilds: [
      { id: 1, name: 'DAOhaus' },
      { id: 2, name: 'Govrn' },
      { id: 3, name: 'Raid Guild' },
    ],
  },
  {
    id: 2,
    name: 'Contribution Proposal 1',
    status: 'Staged',
    activityType: 'Proposal',
    submissionDate: '2022-05-01',
    engagementDate: '2022-05-02',
    attestations: {
      1: 'yes',
    },
    verificationLevel: 2,
    guilds: [],
  },
  {
    id: 3,
    name: 'Contribution Proposal 2',
    status: 'Minted',
    activityType: 'Proposal',
    submissionDate: '2022-05-01',
    engagementDate: '2022-05-02',
    attestations: {},
    verificationLevel: 3,
    guilds: [{ id: 1, name: 'Govrn' }],
  },
];

export const mockContributionTypes = [
  {
    id: 1,
    name: 'Pull Request',
    guild: 'DAOhaus',
    lastOccurrence: '2022-05-03',
  },
  {
    id: 2,
    name: 'Pull Request',
    guild: 'Raid Guild',
    lastOccurrence: '2022-05-04',
  },
  {
    id: 3,
    name: 'Pull Request',
    guild: 'MetaFactory',
    lastOccurrence: '2022-05-05',
  },
  {
    id: 4,
    name: 'Proposal',
    guild: 'DAOhaus',
    lastOccurrence: '2022-05-01',
  },
  {
    id: 5,
    name: 'Proposal',
    guild: 'DAOhaus',
    lastOccurrence: '2022-05-04',
  },
  {
    id: 6,
    name: 'Proposal',
    guild: 'Govrn',
    lastOccurrence: '2022-05-06',
  },
  {
    id: 7,
    name: 'Documentation',
    guild: 'Govrn',
    lastOccurrence: '2022-05-07',
  },
];

export const mockAttestations = [
  {
    id: 1,
    name: 'Contribution Pull Request',
    contributor: 'Not Moloch',
    attestationDate: '2022-05-04',
    guild: 'DAOhaus',
  },
];

// id Int @id @default(autoincrement())
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   confidence_id Int
//   confidence AttestationConfidence @relation(fields: [confidence_id], references: [id])
//   user_id Int
//   user User @relation(fields: [user_id], references: [id])
//   contribution_id Int
//   contribution Contribution @relation(fields: [contribution_id], references: [id])
//   date_of_attestation DateTime @default(now())
