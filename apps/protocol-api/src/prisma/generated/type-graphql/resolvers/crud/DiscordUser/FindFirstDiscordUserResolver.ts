import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindFirstDiscordUserArgs } from './args/FindFirstDiscordUserArgs';
import { DiscordUser } from '../../../models/DiscordUser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => DiscordUser)
export class FindFirstDiscordUserResolver {
  @TypeGraphQL.Query(_returns => DiscordUser, {
    nullable: true,
  })
  async findFirstDiscordUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstDiscordUserArgs,
  ): Promise<DiscordUser | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).discordUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
