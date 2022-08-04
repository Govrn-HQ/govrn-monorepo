import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpsertLinearProjectArgs } from './args/UpsertLinearProjectArgs';
import { LinearProject } from '../../../models/LinearProject';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearProject)
export class UpsertLinearProjectResolver {
  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: false,
  })
  async upsertLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertLinearProjectArgs,
  ): Promise<LinearProject> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
