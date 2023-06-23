import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSplitContractArgs } from "./args/AggregateSplitContractArgs";
import { SplitContract } from "../../../models/SplitContract";
import { AggregateSplitContract } from "../../outputs/AggregateSplitContract";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitContract)
export class AggregateSplitContractResolver {
  @TypeGraphQL.Query(_returns => AggregateSplitContract, {
    nullable: false
  })
  async aggregateSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSplitContractArgs): Promise<AggregateSplitContract> {
    return getPrismaFromContext(ctx).splitContract.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
