import { create, IPFSHTTPClient, CID } from 'ipfs-http-client';

export type MintedContributionSchemaV1 = {
  schema: 'example';
  name: string;
  details: string;
  proof: string;
  activityName: string;
  image: string; // keep blank for now
  govrn: {
    /* Contribution ID */
    id: number;
    activityTypeId: number;
  };
};

export class IPFS {
  client: IPFSHTTPClient;
  VERSION = 2;

  constructor(projectId: string, projectSecret: string) {
    this.client = getIPFSClient({ projectId, projectSecret });
  }

  public async storeContributionMetadata(content: MintedContributionSchemaV1) {
    const contentWithVersion = { ...content, version: this.VERSION };
    const cid = await this.client.add(JSON.stringify(contentWithVersion), {
      cidVersion: 1,
      hashAlg: 'sha2-256',
    });
    console.log('cid', cid);
    const resp = await this.client.pin.add(CID.parse(cid.path));
    console.log('ipfs resp', resp);
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
