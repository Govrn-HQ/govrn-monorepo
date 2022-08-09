import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindManyGuildActivityTypeArgs } from './args/FindManyGuildActivityTypeArgs';
import { GuildActivityType } from '../../../models/GuildActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class FindManyGuildActivityTypeResolver {
  @TypeGraphQL.Query(_returns => [GuildActivityType], {
    nullable: false,
  })
  async guildActivityTypes(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyGuildActivityTypeArgs,
  ): Promise<GuildActivityType[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildActivityType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
