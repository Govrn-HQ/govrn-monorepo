import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoryActivityTypeOrThrowArgs } from "./args/FindUniqueCategoryActivityTypeOrThrowArgs";
import { CategoryActivityType } from "../../../models/CategoryActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class FindUniqueCategoryActivityTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => CategoryActivityType, {
    nullable: true
  })
  async getCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoryActivityTypeOrThrowArgs): Promise<CategoryActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
