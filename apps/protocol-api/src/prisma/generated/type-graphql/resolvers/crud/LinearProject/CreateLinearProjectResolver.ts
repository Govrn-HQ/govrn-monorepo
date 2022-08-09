import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { CreateLinearProjectArgs } from './args/CreateLinearProjectArgs';
import { LinearProject } from '../../../models/LinearProject';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearProject)
export class CreateLinearProjectResolver {
  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: false,
  })
  async createLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateLinearProjectArgs,
  ): Promise<LinearProject> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
