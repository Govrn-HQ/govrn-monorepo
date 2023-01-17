import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCategoryActivityTypeArgs } from "./args/UpsertOneCategoryActivityTypeArgs";
import { CategoryActivityType } from "../../../models/CategoryActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class UpsertOneCategoryActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: false
  })
  async upsertOneCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCategoryActivityTypeArgs): Promise<CategoryActivityType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoryActivityType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
