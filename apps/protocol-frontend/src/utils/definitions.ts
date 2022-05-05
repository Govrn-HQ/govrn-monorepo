/* eslint-disable camelcase */

export interface Chain {
  name: string;
  short_name: string;
  chain: string;
  network: string;
  network_id: number;
  chain_id: string;
  providers: string[];
  rpc_url: string;
  block_explorer: string;
}

export interface ChainList {
  [key: string]: Chain;
}

export interface ChainIdMapping {
  [key: number]: Chain;
}
