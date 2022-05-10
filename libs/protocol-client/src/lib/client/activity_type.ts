import { BaseClient } from './base';
import { ListActivityTypesQueryVariables } from '../protocol-types';

export class ActivityType extends BaseClient {
  public async list(args: ListActivityTypesQueryVariables) {
    const contribution = await this.sdk.listActivityTypes(args);
    return contribution.result;
  }
}
