import { UIContribution, UIAttestations, UIGuilds } from '@govrn/ui-types';

export type MintContributionType = UIContribution & {
  original: {
    name: string;
    details: string;
    proof: string;
    id: number;
    activityTypeId: number;
    date_of_submission: string;
    engagementDate: string;
    onChainId?: number;
  };
};

export interface MintModalProps {
  contributions: MintContributionType[];
}

export type MintAttestationType = UIAttestations[1] & {
  id: number;
  date_of_submission: string;
  date_of_engagement: string;
  attestations: UIAttestations;
  guilds: UIGuilds;
  status: string;
  action: string;
  name: string;
  onChainId: number;
  contributor: string;
};
