import { BaseClient } from './base';
import {
  CreateActivityTypeMutationVariables,
  ListActivityTypesQueryVariables,
  CreateUserActivityMutationVariables,
} from '../protocol-types';

export class ActivityType extends BaseClient {
  public async list(args: ListActivityTypesQueryVariables) {
    const contribution = await this.sdk.listActivityTypes(args);
    return contribution.result;
  }

  public async create(args: CreateActivityTypeMutationVariables) {
    const activity = await this.sdk.createActivityType(args);
    return activity.createActivityType;
  }

  // TODO: Rename
  public async userCreate(args: CreateUserActivityMutationVariables) {
    const activity = await this.sdk.createUserActivity(args);
    return activity.createUserActivity;
  }
}
