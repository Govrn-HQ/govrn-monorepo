import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpdateCategoryActivityArgs } from './args/UpdateCategoryActivityArgs';
import { CategoryActivity } from '../../../models/CategoryActivity';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class UpdateCategoryActivityResolver {
  @TypeGraphQL.Mutation(_returns => CategoryActivity, {
    nullable: true,
  })
  async updateCategoryActivity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategoryActivityArgs,
  ): Promise<CategoryActivity | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
