import * as TypeGraphQL from 'type-graphql';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { FindManyCategoryActivityTypeArgs } from './args/FindManyCategoryActivityTypeArgs';
import { CategoryActivityType } from '../../../models/CategoryActivityType';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class FindManyCategoryActivityTypeResolver {
  @TypeGraphQL.Query(_returns => [CategoryActivityType], {
    nullable: false,
  })
  async categoryActivityTypes(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategoryActivityTypeArgs,
  ): Promise<CategoryActivityType[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).categoryActivityType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
