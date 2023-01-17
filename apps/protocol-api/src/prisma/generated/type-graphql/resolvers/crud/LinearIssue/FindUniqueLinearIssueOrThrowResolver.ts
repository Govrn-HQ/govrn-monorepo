import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLinearIssueOrThrowArgs } from "./args/FindUniqueLinearIssueOrThrowArgs";
import { LinearIssue } from "../../../models/LinearIssue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearIssue)
export class FindUniqueLinearIssueOrThrowResolver {
  @TypeGraphQL.Query(_returns => LinearIssue, {
    nullable: true
  })
  async getLinearIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLinearIssueOrThrowArgs): Promise<LinearIssue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearIssue.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
