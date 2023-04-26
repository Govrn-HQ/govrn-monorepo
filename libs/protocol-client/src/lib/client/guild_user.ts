import { BaseClient } from './base';
import {
  CreateGuildUserCustomMutationVariables,
  CreateManyGuildUserMutationVariables,
  GuildUserUpdateCustomInput,
  ListGuildUsersQuery,
  ListGuildUsersQueryVariables,
  MutationDeleteOneGuildUserArgs,
} from '../protocol-types';
import { paginate } from '../utils/paginate';

export class GuildUser extends BaseClient {
  public async list(args: ListGuildUsersQueryVariables) {
    return paginate<ListGuildUsersQueryVariables, ListGuildUsersQuery>(
      this.sdk.listGuildUsers,
      args,
    );
  }

  public async create(args: CreateGuildUserCustomMutationVariables) {
    return await this.sdk.createGuildUserCustom(args);
  }

  public async delete(args: MutationDeleteOneGuildUserArgs) {
    return await this.sdk.deleteGuildUser(args);
  }

  public async update(args: GuildUserUpdateCustomInput) {
    const updatedGuildUser = await this.sdk.updateGuildUserCustom({
      data: args,
    });
    return updatedGuildUser.updateGuildUserCustom;
  }

  public async bulkCreate(args: CreateManyGuildUserMutationVariables) {
    const guildUser = await this.sdk.createManyGuildUser(args);
    return guildUser.createManyGuildUser;
  }
}
