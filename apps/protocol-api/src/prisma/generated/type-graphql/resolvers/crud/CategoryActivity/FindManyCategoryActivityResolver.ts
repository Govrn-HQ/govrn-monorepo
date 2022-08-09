import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindManyCategoryActivityArgs } from './args/FindManyCategoryActivityArgs';
import { CategoryActivity } from '../../../models/CategoryActivity';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class FindManyCategoryActivityResolver {
  @TypeGraphQL.Query(_returns => [CategoryActivity], {
    nullable: false,
  })
  async categoryActivities(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategoryActivityArgs,
  ): Promise<CategoryActivity[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivity.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
