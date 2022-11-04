import { Buffer } from 'buffer';
import { create, IPFSHTTPClient, CID } from 'ipfs-http-client';
import { ContributionV1SchemaCid } from './constants';

export type MintedContributionSchemaV1 = {
  schema: `ipfs://Qmc3fKseQ1JyiJiPsmazx23A6twy6YCkTfqDfHUKZDL5xq`;
  name: string;
  details: string;
  proof: string;
  activityName: string;
  image?: string; // keep blank for now
  govrn: {
    /* Contribution ID */
    id: number;
    activityTypeId: number;
  };
};

export class IPFS {
  client: IPFSHTTPClient;
  VERSION = 1;

  constructor(projectId: string, projectSecret: string) {
    this.client = getIPFSClient({ projectId, projectSecret });
  }

  public async storeContributionMetadata(
    content: Omit<MintedContributionSchemaV1, 'schema'>,
  ) {
    const contentWithVersion = {
      ...content,
      schema: ContributionV1SchemaCid,
      version: this.VERSION,
    };
    const cid = await this.client.add(JSON.stringify(contentWithVersion), {
      cidVersion: 1,
      hashAlg: 'sha2-256',
    });
    await this.client.pin.add(CID.parse(cid.path));
    return `ipfs://${cid.path}`;
  }

  public async uploadFileIPFS(file: File, onlyHash = true) {
    if (onlyHash) {
      const onlyHashOutput = await this.client.add(file, { onlyHash: true });
      return `ipfs://${onlyHashOutput.path}`;
    }
    const cid = await this.client.add(file, { onlyHash });
    await this.client.pin.add(cid.path);
    return `ipfs://${cid.path}`;
  }
}

const getIPFSClient = ({
  projectId,
  projectSecret,
}: {
  projectId: string;
  projectSecret: string;
}) => {
  const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  return create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });
};
