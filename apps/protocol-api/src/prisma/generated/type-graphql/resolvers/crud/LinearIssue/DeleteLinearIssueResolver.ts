import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { DeleteLinearIssueArgs } from './args/DeleteLinearIssueArgs';
import { LinearIssue } from '../../../models/LinearIssue';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearIssue)
export class DeleteLinearIssueResolver {
  @TypeGraphQL.Mutation(_returns => LinearIssue, {
    nullable: true,
  })
  async deleteLinearIssue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteLinearIssueArgs,
  ): Promise<LinearIssue | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).linearIssue.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
