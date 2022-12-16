import { UIContribution, UIAttestations, UIGuilds } from '@govrn/ui-types';

export interface MintModalProps {
  contributions: UIContribution[];
  onFinish?: (() => void) | undefined;
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
