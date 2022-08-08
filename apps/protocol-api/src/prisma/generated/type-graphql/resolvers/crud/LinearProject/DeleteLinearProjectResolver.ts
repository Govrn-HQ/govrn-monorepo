import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteLinearProjectArgs } from './args/DeleteLinearProjectArgs';
import { LinearProject } from '../../../models/LinearProject';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearProject)
export class DeleteLinearProjectResolver {
  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: true,
  })
  async deleteLinearProject(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteLinearProjectArgs,
  ): Promise<LinearProject | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearProject.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
