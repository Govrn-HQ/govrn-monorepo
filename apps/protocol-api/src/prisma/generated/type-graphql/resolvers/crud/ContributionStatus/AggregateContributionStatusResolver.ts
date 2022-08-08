import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateContributionStatusArgs } from './args/AggregateContributionStatusArgs';
import { ContributionStatus } from '../../../models/ContributionStatus';
import { AggregateContributionStatus } from '../../outputs/AggregateContributionStatus';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class AggregateContributionStatusResolver {
  @TypeGraphQL.Query(_returns => AggregateContributionStatus, {
    nullable: false,
  })
  async aggregateContributionStatus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateContributionStatusArgs,
  ): Promise<AggregateContributionStatus> {
    return getPrismaFromContext(ctx).contributionStatus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
