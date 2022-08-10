import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpsertGuildArgs } from './args/UpsertGuildArgs';
import { Guild } from '../../../models/Guild';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => Guild)
export class UpsertGuildResolver {
  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: false,
  })
  async upsertGuild(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertGuildArgs,
  ): Promise<Guild> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guild.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
