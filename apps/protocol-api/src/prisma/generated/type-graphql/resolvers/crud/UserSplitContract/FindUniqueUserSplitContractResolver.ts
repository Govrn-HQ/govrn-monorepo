import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserSplitContractArgs } from "./args/FindUniqueUserSplitContractArgs";
import { UserSplitContract } from "../../../models/UserSplitContract";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSplitContract)
export class FindUniqueUserSplitContractResolver {
  @TypeGraphQL.Query(_returns => UserSplitContract, {
    nullable: true
  })
  async userSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserSplitContractArgs): Promise<UserSplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userSplitContract.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
