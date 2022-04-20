// , $orderBy: LinearJobRun_orderBy! = id, $orderDirection: OrderDirection! = asc
import { createClient, Client } from '@urql/core';
import { getLinearJobRunQuery } from './queries';
import { LinearJobRun as LinearJobRunType } from './protocol_types';

// Client
// then resource
// then get
// the list etc...
export class GovrnProtocol {
  client: Client;
  jobRun: LinearJobRun;

  constructor(apiUrl: string) {
    this.client = createClient({
      url: apiUrl,
    });
    this.jobRun = new LinearJobRun(this.client);
  }
}

class LinearJobRun {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public async get(id: number): Promise<LinearJobRunType> {
    const jobRun = await this.client
      .query(getLinearJobRunQuery, { id })
      .toPromise();
    return jobRun.data as LinearJobRunType;
  }

  public async list(): Promise<LinearJobRunType[]> {
    const jobRun = await this.client
      .query(getLinearJobRunQuery, { id })
      .toPromise();
  }
}
