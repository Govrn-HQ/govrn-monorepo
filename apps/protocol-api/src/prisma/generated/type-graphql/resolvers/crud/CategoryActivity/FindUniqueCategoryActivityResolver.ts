import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoryActivityArgs } from "./args/FindUniqueCategoryActivityArgs";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class FindUniqueCategoryActivityResolver {
  @TypeGraphQL.Query(_returns => CategoryActivity, {
    nullable: true
  })
  async categoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoryActivityArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
