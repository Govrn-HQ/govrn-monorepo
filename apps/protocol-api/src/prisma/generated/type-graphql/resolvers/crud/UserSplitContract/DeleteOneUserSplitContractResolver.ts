import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserSplitContractArgs } from "./args/DeleteOneUserSplitContractArgs";
import { UserSplitContract } from "../../../models/UserSplitContract";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSplitContract)
export class DeleteOneUserSplitContractResolver {
  @TypeGraphQL.Mutation(_returns => UserSplitContract, {
    nullable: true
  })
  async deleteOneUserSplitContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserSplitContractArgs): Promise<UserSplitContract | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userSplitContract.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
