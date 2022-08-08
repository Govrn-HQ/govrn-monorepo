import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpsertJobRunArgs } from './args/UpsertJobRunArgs';
import { JobRun } from '../../../models/JobRun';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => JobRun)
export class UpsertJobRunResolver {
  @TypeGraphQL.Mutation(_returns => JobRun, {
    nullable: false,
  })
  async upsertJobRun(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertJobRunArgs,
  ): Promise<JobRun> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).jobRun.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
