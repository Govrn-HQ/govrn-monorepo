import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserSplitContractArgs } from "./args/UpsertOneUserSplitContractArgs";
import { UserSplitContract } from "../../../models/UserSplitContract";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSplitContract)
export class UpsertOneUserSplitContractResolver {
  @TypeGraphQL.Mutation(_returns => UserSplitContract, {
    nullable: false
  })
  async upsertOneUserSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserSplitContractArgs): Promise<UserSplitContract> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userSplitContract.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
