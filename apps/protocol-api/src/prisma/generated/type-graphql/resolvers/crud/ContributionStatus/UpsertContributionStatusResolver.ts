import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpsertContributionStatusArgs } from './args/UpsertContributionStatusArgs';
import { ContributionStatus } from '../../../models/ContributionStatus';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class UpsertContributionStatusResolver {
  @TypeGraphQL.Mutation(_returns => ContributionStatus, {
    nullable: false,
  })
  async upsertContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertContributionStatusArgs,
  ): Promise<ContributionStatus> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).contributionStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
