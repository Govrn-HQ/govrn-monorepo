import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserSplitContractArgs } from "./args/AggregateUserSplitContractArgs";
import { UserSplitContract } from "../../../models/UserSplitContract";
import { AggregateUserSplitContract } from "../../outputs/AggregateUserSplitContract";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSplitContract)
export class AggregateUserSplitContractResolver {
  @TypeGraphQL.Query(_returns => AggregateUserSplitContract, {
    nullable: false
  })
  async aggregateUserSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserSplitContractArgs): Promise<AggregateUserSplitContract> {
    return getPrismaFromContext(ctx).userSplitContract.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
