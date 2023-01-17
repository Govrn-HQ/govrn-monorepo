import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryActivityTypeArgs } from "./args/AggregateCategoryActivityTypeArgs";
import { CategoryActivityType } from "../../../models/CategoryActivityType";
import { AggregateCategoryActivityType } from "../../outputs/AggregateCategoryActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoryActivityType)
export class AggregateCategoryActivityTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoryActivityType, {
    nullable: false
  })
  async aggregateCategoryActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoryActivityTypeArgs): Promise<AggregateCategoryActivityType> {
    return getPrismaFromContext(ctx).categoryActivityType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
