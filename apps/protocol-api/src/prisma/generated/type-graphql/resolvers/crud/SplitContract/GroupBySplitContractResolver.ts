import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySplitContractArgs } from "./args/GroupBySplitContractArgs";
import { SplitContract } from "../../../models/SplitContract";
import { SplitContractGroupBy } from "../../outputs/SplitContractGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitContract)
export class GroupBySplitContractResolver {
  @TypeGraphQL.Query(_returns => [SplitContractGroupBy], {
    nullable: false
  })
  async groupBySplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySplitContractArgs): Promise<SplitContractGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).splitContract.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
