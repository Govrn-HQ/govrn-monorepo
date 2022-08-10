import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteJobRunArgs } from './args/DeleteJobRunArgs';
import { JobRun } from '../../../models/JobRun';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => JobRun)
export class DeleteJobRunResolver {
  @TypeGraphQL.Mutation(_returns => JobRun, {
    nullable: true,
  })
  async deleteJobRun(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteJobRunArgs,
  ): Promise<JobRun | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).jobRun.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
