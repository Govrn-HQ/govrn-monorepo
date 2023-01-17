import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLinearUserArgs } from "./args/AggregateLinearUserArgs";
import { LinearUser } from "../../../models/LinearUser";
import { AggregateLinearUser } from "../../outputs/AggregateLinearUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearUser)
export class AggregateLinearUserResolver {
  @TypeGraphQL.Query(_returns => AggregateLinearUser, {
    nullable: false
  })
  async aggregateLinearUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLinearUserArgs): Promise<AggregateLinearUser> {
    return getPrismaFromContext(ctx).linearUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
