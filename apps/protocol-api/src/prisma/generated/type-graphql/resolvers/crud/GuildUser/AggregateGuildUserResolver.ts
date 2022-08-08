import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateGuildUserArgs } from './args/AggregateGuildUserArgs';
import { GuildUser } from '../../../models/GuildUser';
import { AggregateGuildUser } from '../../outputs/AggregateGuildUser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => GuildUser)
export class AggregateGuildUserResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildUser, {
    nullable: false,
  })
  async aggregateGuildUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateGuildUserArgs,
  ): Promise<AggregateGuildUser> {
    return getPrismaFromContext(ctx).guildUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
