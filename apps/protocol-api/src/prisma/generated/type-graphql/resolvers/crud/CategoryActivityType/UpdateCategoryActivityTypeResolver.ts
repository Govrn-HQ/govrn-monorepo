import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpdateCategoryActivityTypeArgs } from './args/UpdateCategoryActivityTypeArgs';
import { CategoryActivityType } from '../../../models/CategoryActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class UpdateCategoryActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => CategoryActivityType, {
    nullable: true,
  })
  async updateCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
