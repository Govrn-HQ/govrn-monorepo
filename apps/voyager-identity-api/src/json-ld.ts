import { LDContribution } from './types';

const template = {
  '@context': 'http://www.daostar.org/schemas',
  type: 'attestation',
  issuer: 'Govrn',
  organizations: [],
  scores: [],
};

export const transform = async (data: Array<LDContribution>, owner: string) => {
  const transformed = data.map(c => ({
    id: c.id,
    type: 'GovrnContribution',
    detailsUri: c.detailsUri,
    attestorURI: '',
  }));

  const member = {
    type: 'EthereumAddress',
    address: owner,
  };

  return {
    ...template,
    member,
    contributions: transformed,
  };
};
