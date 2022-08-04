import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpsertGuildUserArgs } from './args/UpsertGuildUserArgs';
import { GuildUser } from '../../../models/GuildUser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => GuildUser)
export class UpsertGuildUserResolver {
  @TypeGraphQL.Mutation(_returns => GuildUser, {
    nullable: false,
  })
  async upsertGuildUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertGuildUserArgs,
  ): Promise<GuildUser> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
