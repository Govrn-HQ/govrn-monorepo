import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryActivityArgs } from "./args/AggregateCategoryActivityArgs";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { AggregateCategoryActivity } from "../../outputs/AggregateCategoryActivity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class AggregateCategoryActivityResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoryActivity, {
    nullable: false
  })
  async aggregateCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoryActivityArgs): Promise<AggregateCategoryActivity> {
    return getPrismaFromContext(ctx).categoryActivity.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
