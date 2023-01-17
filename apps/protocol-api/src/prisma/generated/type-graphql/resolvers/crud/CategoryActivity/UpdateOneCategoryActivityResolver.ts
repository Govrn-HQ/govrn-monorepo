import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCategoryActivityArgs } from "./args/UpdateOneCategoryActivityArgs";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class UpdateOneCategoryActivityResolver {
  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: true
  })
  async updateOneCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCategoryActivityArgs): Promise<CategoryActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivity.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
