import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUserSplitContractArgs } from "./args/GroupByUserSplitContractArgs";
import { UserSplitContract } from "../../../models/UserSplitContract";
import { UserSplitContractGroupBy } from "../../outputs/UserSplitContractGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSplitContract)
export class GroupByUserSplitContractResolver {
  @TypeGraphQL.Query(_returns => [UserSplitContractGroupBy], {
    nullable: false
  })
  async groupByUserSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserSplitContractArgs): Promise<UserSplitContractGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userSplitContract.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
