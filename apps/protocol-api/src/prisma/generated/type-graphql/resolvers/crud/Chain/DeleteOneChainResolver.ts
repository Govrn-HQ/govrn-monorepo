import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneChainArgs } from "./args/DeleteOneChainArgs";
import { Chain } from "../../../models/Chain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Chain)
export class DeleteOneChainResolver {
  @TypeGraphQL.Mutation(_returns => Chain, {
    nullable: true
  })
  async deleteOneChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneChainArgs): Promise<Chain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chain.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
