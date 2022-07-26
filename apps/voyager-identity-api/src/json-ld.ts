import { LDContribution } from './types';

const template = {
  '@context': 'http://www.daostar.org/schemas',
  type: 'attestation',
  issuer: 'Govrn',
};

export const transform = async (data: Array<LDContribution>) => {
  const transformed = data.map((c) => {
    return {
      type: 'contribution',
      commit_type: 'Pull Request',
      reference: c.detailsUri,
      attesterURI: `https://api.govrn.io/apps/profile/${c.attestor}`,
    };
  });

  return {
    ...template,
    contributions: transformed,
  };
};
