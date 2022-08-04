import * as TypeGraphQL from 'type-graphql';
import { Guild } from '../../../models/Guild';
import { GuildActivityType } from '../../../models/GuildActivityType';
import { GuildContribution } from '../../../models/GuildContribution';
import { GuildUser } from '../../../models/GuildUser';
import { TwitterAccount } from '../../../models/TwitterAccount';
import { GuildActivity_typeArgs } from './args/GuildActivity_typeArgs';
import { GuildContributionsArgs } from './args/GuildContributionsArgs';
import { GuildUsersArgs } from './args/GuildUsersArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => Guild)
export class GuildRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [GuildContribution], {
    nullable: false,
  })
  async contributions(
    @TypeGraphQL.Root() guild: Guild,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: GuildContributionsArgs,
  ): Promise<GuildContribution[]> {
    return getPrismaFromContext(ctx)
      .guild.findUnique({
        where: {
          id: guild.id,
        },
      })
      .contributions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [GuildUser], {
    nullable: false,
  })
  async users(
    @TypeGraphQL.Root() guild: Guild,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: GuildUsersArgs,
  ): Promise<GuildUser[]> {
    return getPrismaFromContext(ctx)
      .guild.findUnique({
        where: {
          id: guild.id,
        },
      })
      .users(args);
  }

  @TypeGraphQL.FieldResolver(_type => TwitterAccount, {
    nullable: true,
  })
  async twitter_account(
    @TypeGraphQL.Root() guild: Guild,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<TwitterAccount | null> {
    return getPrismaFromContext(ctx)
      .guild.findUnique({
        where: {
          id: guild.id,
        },
      })
      .twitter_account({});
  }

  @TypeGraphQL.FieldResolver(_type => [GuildActivityType], {
    nullable: false,
  })
  async activity_type(
    @TypeGraphQL.Root() guild: Guild,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: GuildActivity_typeArgs,
  ): Promise<GuildActivityType[]> {
    return getPrismaFromContext(ctx)
      .guild.findUnique({
        where: {
          id: guild.id,
        },
      })
      .activity_type(args);
  }
}
