import { BaseClient } from './base';
import {
  CreateActivityTypeMutationVariables,
  ListActivityTypesQueryVariables,
  CreateUserActivityMutationVariables,
  UpsertActivityTypeMutationVariables,
} from '../protocol-types';

export class ActivityType extends BaseClient {
  public async list(args: ListActivityTypesQueryVariables) {
    const contribution = await this.sdk.listActivityTypes(args);
    return contribution.result;
  }

  public async create(args: CreateActivityTypeMutationVariables) {
    const activity = await this.sdk.createActivityType(args);
    return activity.createOneActivityType;
  }

  public async upsert(args: UpsertActivityTypeMutationVariables) {
    const activity = await this.sdk.upsertActivityType(args);
    return activity.upsertOneActivityType;
  }

  // TODO: Rename
  public async userCreate(args: CreateUserActivityMutationVariables) {
    const activity = await this.sdk.createUserActivity(args);
    return activity.createOneUserActivity;
  }
}
