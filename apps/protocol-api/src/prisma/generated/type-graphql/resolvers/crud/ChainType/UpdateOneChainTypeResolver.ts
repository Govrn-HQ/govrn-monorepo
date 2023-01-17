import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneChainTypeArgs } from "./args/UpdateOneChainTypeArgs";
import { ChainType } from "../../../models/ChainType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChainType)
export class UpdateOneChainTypeResolver {
  @TypeGraphQL.Mutation(_returns => ChainType, {
    nullable: true
  })
  async updateOneChainType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneChainTypeArgs): Promise<ChainType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chainType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
