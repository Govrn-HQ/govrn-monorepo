import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateActivityTypeArgs } from "./args/AggregateActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
import { AggregateActivityType } from "../../outputs/AggregateActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActivityType)
export class AggregateActivityTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateActivityType, {
    nullable: false
  })
  async aggregateActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActivityTypeArgs): Promise<AggregateActivityType> {
    return getPrismaFromContext(ctx).activityType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
