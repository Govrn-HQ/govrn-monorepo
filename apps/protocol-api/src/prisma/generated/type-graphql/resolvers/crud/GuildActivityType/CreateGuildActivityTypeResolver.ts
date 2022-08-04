import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { CreateGuildActivityTypeArgs } from './args/CreateGuildActivityTypeArgs';
import { GuildActivityType } from '../../../models/GuildActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class CreateGuildActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => GuildActivityType, {
    nullable: false,
  })
  async createGuildActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateGuildActivityTypeArgs,
  ): Promise<GuildActivityType> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildActivityType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
