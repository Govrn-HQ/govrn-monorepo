import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLinearIssueArgs } from "./args/FindFirstLinearIssueArgs";
import { LinearIssue } from "../../../models/LinearIssue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearIssue)
export class FindFirstLinearIssueResolver {
  @TypeGraphQL.Query(_returns => LinearIssue, {
    nullable: true
  })
  async findFirstLinearIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLinearIssueArgs): Promise<LinearIssue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearIssue.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
