import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { GroupByJobRunArgs } from './args/GroupByJobRunArgs';
import { JobRun } from '../../../models/JobRun';
import { JobRunGroupBy } from '../../outputs/JobRunGroupBy';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => JobRun)
export class GroupByJobRunResolver {
  @TypeGraphQL.Query(_returns => [JobRunGroupBy], {
    nullable: false,
  })
  async groupByJobRun(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByJobRunArgs,
  ): Promise<JobRunGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).jobRun.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
