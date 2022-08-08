import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryActivityArgs } from "./args/AggregateCategoryActivityArgs";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { AggregateCategoryActivity } from "../../outputs/AggregateCategoryActivity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivity)
export class AggregateCategoryActivityResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoryActivity, {
    nullable: false
  })
  async aggregateCategoryActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoryActivityArgs): Promise<AggregateCategoryActivity> {
    return getPrismaFromContext(ctx).categoryActivity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
