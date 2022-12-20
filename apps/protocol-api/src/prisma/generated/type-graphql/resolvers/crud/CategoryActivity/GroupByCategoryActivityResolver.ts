import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCategoryActivityArgs } from "./args/GroupByCategoryActivityArgs";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { CategoryActivityGroupBy } from "../../outputs/CategoryActivityGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class GroupByCategoryActivityResolver {
  @TypeGraphQL.Query(_returns => [CategoryActivityGroupBy], {
    nullable: false
  })
  async groupByCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCategoryActivityArgs): Promise<CategoryActivityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
