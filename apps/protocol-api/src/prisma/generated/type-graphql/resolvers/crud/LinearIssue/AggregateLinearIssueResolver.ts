import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLinearIssueArgs } from "./args/AggregateLinearIssueArgs";
import { LinearIssue } from "../../../models/LinearIssue";
import { AggregateLinearIssue } from "../../outputs/AggregateLinearIssue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearIssue)
export class AggregateLinearIssueResolver {
  @TypeGraphQL.Query(_returns => AggregateLinearIssue, {
    nullable: false
  })
  async aggregateLinearIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLinearIssueArgs): Promise<AggregateLinearIssue> {
    return getPrismaFromContext(ctx).linearIssue.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
