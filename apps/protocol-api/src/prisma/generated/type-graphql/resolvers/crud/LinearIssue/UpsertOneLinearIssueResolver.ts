import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLinearIssueArgs } from "./args/UpsertOneLinearIssueArgs";
import { LinearIssue } from "../../../models/LinearIssue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearIssue)
export class UpsertOneLinearIssueResolver {
  @TypeGraphQL.Mutation(_returns => LinearIssue, {
    nullable: false
  })
  async upsertOneLinearIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLinearIssueArgs): Promise<LinearIssue> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearIssue.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
