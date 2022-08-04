import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpsertGuildActivityTypeArgs } from './args/UpsertGuildActivityTypeArgs';
import { GuildActivityType } from '../../../models/GuildActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class UpsertGuildActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => GuildActivityType, {
    nullable: false,
  })
  async upsertGuildActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertGuildActivityTypeArgs,
  ): Promise<GuildActivityType> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildActivityType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
