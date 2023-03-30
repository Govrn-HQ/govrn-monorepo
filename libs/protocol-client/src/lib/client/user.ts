import {
  CreateManyUsersMutationVariables,
  ListUserActivityQueryVariables,
  ListUsersQueryVariables,
  UserCreateCustomInput,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '../protocol-types';
import { BaseClient } from './base';
import { GraphQLClient } from 'graphql-request';
import { GuildUser } from './guild_user';
import { GuildMembershipStatus } from "./membership_status";

export class User extends BaseClient {
  guild: GuildUser;
  activity_type: UserActivity;
  guildMembershipStatus: GuildMembershipStatus;


  constructor(client: GraphQLClient) {
    super(client);
    this.guild = new GuildUser(this.client);
    this.activity_type = new UserActivity(this.client);
    this.guildMembershipStatus = new GuildMembershipStatus(this.client);
  }

  public async get(id: number) {
    const user = await this.sdk.getUserCustom({ id });
    return user.result;
  }

  public async update(data: UserUpdateInput, where: UserWhereUniqueInput) {
    const user = await this.sdk.updateUser({ where, data });
    return user.updateOneUser;
  }

  public async list(args: ListUsersQueryVariables) {
    const contributions = await this.sdk.listUsers(args);
    return contributions.result;
  }

  public async create(args: UserCreateCustomInput) {
    const contributions = await this.sdk.createUserCustom({ data: args });
    return contributions.createUserCustom;
  }

  public async createMany(args: CreateManyUsersMutationVariables) {
    const contributions = await this.sdk.createManyUsers(args);
    return contributions.createManyUser;
  }
}

// UserActivity settings
export class UserActivity extends BaseClient {
  public async list(args: ListUserActivityQueryVariables) {
    const contributions = await this.sdk.listUserActivity(args);
    return contributions.userActivities;
  }
}
