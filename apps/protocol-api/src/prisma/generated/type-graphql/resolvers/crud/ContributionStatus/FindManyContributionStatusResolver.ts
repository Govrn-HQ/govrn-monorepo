import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindManyContributionStatusArgs } from './args/FindManyContributionStatusArgs';
import { ContributionStatus } from '../../../models/ContributionStatus';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class FindManyContributionStatusResolver {
  @TypeGraphQL.Query(_returns => [ContributionStatus], {
    nullable: false,
  })
  async contributionStatuses(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyContributionStatusArgs,
  ): Promise<ContributionStatus[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
