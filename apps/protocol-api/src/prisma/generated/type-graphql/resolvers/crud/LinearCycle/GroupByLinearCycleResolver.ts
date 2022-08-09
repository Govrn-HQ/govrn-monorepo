import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { GroupByLinearCycleArgs } from './args/GroupByLinearCycleArgs';
import { LinearCycle } from '../../../models/LinearCycle';
import { LinearCycleGroupBy } from '../../outputs/LinearCycleGroupBy';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearCycle)
export class GroupByLinearCycleResolver {
  @TypeGraphQL.Query(_returns => [LinearCycleGroupBy], {
    nullable: false,
  })
  async groupByLinearCycle(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByLinearCycleArgs,
  ): Promise<LinearCycleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).linearCycle.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
