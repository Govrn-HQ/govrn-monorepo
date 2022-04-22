import * as TypeGraphQL from "type-graphql";
import { ActivityType } from "../../../models/ActivityType";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { CategoryActivityActivityTypesArgs } from "./args/CategoryActivityActivityTypesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class CategoryActivityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ActivityType], {
    nullable: false
  })
  async activityTypes(@TypeGraphQL.Root() categoryActivity: CategoryActivity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryActivityActivityTypesArgs): Promise<ActivityType[]> {
    return getPrismaFromContext(ctx).categoryActivity.findUnique({
      where: {
        id: categoryActivity.id,
      },
    }).activityTypes(args);
  }
}
