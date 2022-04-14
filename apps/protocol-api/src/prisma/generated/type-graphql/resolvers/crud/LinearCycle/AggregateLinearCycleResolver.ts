import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLinearCycleArgs } from "./args/AggregateLinearCycleArgs";
import { LinearCycle } from "../../../models/LinearCycle";
import { AggregateLinearCycle } from "../../outputs/AggregateLinearCycle";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearCycle)
export class AggregateLinearCycleResolver {
  @TypeGraphQL.Query(_returns => AggregateLinearCycle, {
    nullable: false
  })
  async aggregateLinearCycle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLinearCycleArgs): Promise<AggregateLinearCycle> {
    return getPrismaFromContext(ctx).linearCycle.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
