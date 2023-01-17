import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTwitterAccountArgs } from "./args/GroupByTwitterAccountArgs";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { TwitterAccountGroupBy } from "../../outputs/TwitterAccountGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterAccount)
export class GroupByTwitterAccountResolver {
  @TypeGraphQL.Query(_returns => [TwitterAccountGroupBy], {
    nullable: false
  })
  async groupByTwitterAccount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTwitterAccountArgs): Promise<TwitterAccountGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterAccount.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
