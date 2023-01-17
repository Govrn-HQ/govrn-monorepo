import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneChainTypeArgs } from "./args/DeleteOneChainTypeArgs";
import { ChainType } from "../../../models/ChainType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChainType)
export class DeleteOneChainTypeResolver {
  @TypeGraphQL.Mutation(_returns => ChainType, {
    nullable: true
  })
  async deleteOneChainType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneChainTypeArgs): Promise<ChainType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chainType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
