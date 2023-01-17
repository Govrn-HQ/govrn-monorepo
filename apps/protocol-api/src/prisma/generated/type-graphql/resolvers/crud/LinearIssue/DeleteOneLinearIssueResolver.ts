import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLinearIssueArgs } from "./args/DeleteOneLinearIssueArgs";
import { LinearIssue } from "../../../models/LinearIssue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearIssue)
export class DeleteOneLinearIssueResolver {
  @TypeGraphQL.Mutation(_returns => LinearIssue, {
    nullable: true
  })
  async deleteOneLinearIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLinearIssueArgs): Promise<LinearIssue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearIssue.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
