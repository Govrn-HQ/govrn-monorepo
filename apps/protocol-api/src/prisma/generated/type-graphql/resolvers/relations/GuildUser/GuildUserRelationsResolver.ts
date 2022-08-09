import * as TypeGraphQL from 'type-graphql';
import { Guild } from '../../../models/Guild';
import { GuildUser } from '../../../models/GuildUser';
import { User } from '../../../models/User';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => GuildUser)
export class GuildUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() guildUser: GuildUser,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .guildUser.findUnique({
        where: {
          id: guildUser.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false,
  })
  async guild(
    @TypeGraphQL.Root() guildUser: GuildUser,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Guild> {
    return getPrismaFromContext(ctx)
      .guildUser.findUnique({
        where: {
          id: guildUser.id,
        },
      })
      .guild({});
  }
}
