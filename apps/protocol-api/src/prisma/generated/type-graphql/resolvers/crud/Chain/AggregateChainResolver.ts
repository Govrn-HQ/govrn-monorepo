import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateChainArgs } from "./args/AggregateChainArgs";
import { Chain } from "../../../models/Chain";
import { AggregateChain } from "../../outputs/AggregateChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Chain)
export class AggregateChainResolver {
  @TypeGraphQL.Query(_returns => AggregateChain, {
    nullable: false
  })
  async aggregateChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChainArgs): Promise<AggregateChain> {
    return getPrismaFromContext(ctx).chain.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
