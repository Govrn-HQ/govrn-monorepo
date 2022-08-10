import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { AggregateContributionArgs } from './args/AggregateContributionArgs';
import { Contribution } from '../../../models/Contribution';
import { AggregateContribution } from '../../outputs/AggregateContribution';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => Contribution)
export class AggregateContributionResolver {
  @TypeGraphQL.Query(_returns => AggregateContribution, {
    nullable: false,
  })
  async aggregateContribution(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateContributionArgs,
  ): Promise<AggregateContribution> {
    return getPrismaFromContext(ctx).contribution.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
