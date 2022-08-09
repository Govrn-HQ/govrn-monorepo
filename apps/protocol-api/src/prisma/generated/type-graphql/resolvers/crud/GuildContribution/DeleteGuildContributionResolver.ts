import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteGuildContributionArgs } from './args/DeleteGuildContributionArgs';
import { GuildContribution } from '../../../models/GuildContribution';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => GuildContribution)
export class DeleteGuildContributionResolver {
  @TypeGraphQL.Mutation(_returns => GuildContribution, {
    nullable: true,
  })
  async deleteGuildContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteGuildContributionArgs,
  ): Promise<GuildContribution | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).guildContribution.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
