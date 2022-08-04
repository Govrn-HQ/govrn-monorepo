import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { GroupByContributionStatusArgs } from './args/GroupByContributionStatusArgs';
import { ContributionStatus } from '../../../models/ContributionStatus';
import { ContributionStatusGroupBy } from '../../outputs/ContributionStatusGroupBy';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class GroupByContributionStatusResolver {
  @TypeGraphQL.Query(_returns => [ContributionStatusGroupBy], {
    nullable: false,
  })
  async groupByContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByContributionStatusArgs,
  ): Promise<ContributionStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).contributionStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
