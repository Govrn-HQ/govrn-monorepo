import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindUniqueDiscordUserArgs } from './args/FindUniqueDiscordUserArgs';
import { DiscordUser } from '../../../models/DiscordUser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => DiscordUser)
export class FindUniqueDiscordUserResolver {
  @TypeGraphQL.Query(_returns => DiscordUser, {
    nullable: true,
  })
  async discordUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueDiscordUserArgs,
  ): Promise<DiscordUser | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).discordUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
