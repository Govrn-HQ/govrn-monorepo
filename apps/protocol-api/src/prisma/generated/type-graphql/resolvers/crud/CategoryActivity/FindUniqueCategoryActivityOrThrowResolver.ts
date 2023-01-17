import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoryActivityOrThrowArgs } from "./args/FindUniqueCategoryActivityOrThrowArgs";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class FindUniqueCategoryActivityOrThrowResolver {
  @TypeGraphQL.Query(_returns => CategoryActivity, {
    nullable: true
  })
  async getCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoryActivityOrThrowArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
