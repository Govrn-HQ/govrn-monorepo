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
    guilds: {
      1: 'DAOhaus',
      2: 'Raid Guild',
      3: 'MetaFactory',
    },
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
    guilds: {},
  },
  {
    id: 3,
    name: 'Contribution Proposal 2',
    status: 'Minted',
    activityType: 'Proposal',
    submissionDate: '2022-05-01',
    engagementDate: '2022-05-02',
    attestations: {},
    guilds: {},
  },
];
