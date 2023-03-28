import { BaseClient } from './base';
import {
  CreateGuildUserCustomMutationVariables,
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
    const guildUser = await this.sdk.createGuildUserCustom(args);
    return guildUser.createGuildUserCustom;
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
}
