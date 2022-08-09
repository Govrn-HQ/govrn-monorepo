import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindFirstCategoryActivityTypeArgs } from './args/FindFirstCategoryActivityTypeArgs';
import { CategoryActivityType } from '../../../models/CategoryActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class FindFirstCategoryActivityTypeResolver {
  @TypeGraphQL.Query(_returns => CategoryActivityType, {
    nullable: true,
  })
  async findFirstCategoryActivityType(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
