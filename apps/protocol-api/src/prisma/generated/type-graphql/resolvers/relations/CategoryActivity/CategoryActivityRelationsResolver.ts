import * as TypeGraphQL from "type-graphql";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { CategoryActivityType } from "../../../models/CategoryActivityType";
import { CategoryActivityActivityTypesArgs } from "./args/CategoryActivityActivityTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class CategoryActivityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CategoryActivityType], {
    nullable: false
  })
  async activityTypes(@TypeGraphQL.Root() categoryActivity: CategoryActivity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryActivityActivityTypesArgs): Promise<CategoryActivityType[]> {
    return getPrismaFromContext(ctx).categoryActivity.findUnique({
      where: {
        id: categoryActivity.id,
      },
    }).activityTypes(args);
  }
}
