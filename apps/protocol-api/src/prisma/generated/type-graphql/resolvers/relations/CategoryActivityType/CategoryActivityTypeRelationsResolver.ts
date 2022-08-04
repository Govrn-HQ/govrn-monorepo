import * as TypeGraphQL from 'type-graphql';
import { ActivityType } from '../../../models/ActivityType';
import { CategoryActivity } from '../../../models/CategoryActivity';
import { CategoryActivityType } from '../../../models/CategoryActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class CategoryActivityTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CategoryActivity, {
    nullable: false,
  })
  async category_activity(
    @TypeGraphQL.Root() categoryActivityType: CategoryActivityType,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<CategoryActivity> {
    return getPrismaFromContext(ctx)
      .categoryActivityType.findUnique({
        where: {
          id: categoryActivityType.id,
        },
      })
      .category_activity({});
  }

  @TypeGraphQL.FieldResolver(_type => ActivityType, {
    nullable: false,
  })
  async activity_type(
    @TypeGraphQL.Root() categoryActivityType: CategoryActivityType,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<ActivityType> {
    return getPrismaFromContext(ctx)
      .categoryActivityType.findUnique({
        where: {
          id: categoryActivityType.id,
        },
      })
      .activity_type({});
  }
}
