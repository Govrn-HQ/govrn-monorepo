import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindFirstContributionStatusArgs } from './args/FindFirstContributionStatusArgs';
import { ContributionStatus } from '../../../models/ContributionStatus';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class FindFirstContributionStatusResolver {
  @TypeGraphQL.Query(_returns => ContributionStatus, {
    nullable: true,
  })
  async findFirstContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstContributionStatusArgs,
  ): Promise<ContributionStatus | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
