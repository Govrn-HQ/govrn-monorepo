import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneChainTypeArgs } from "./args/CreateOneChainTypeArgs";
import { ChainType } from "../../../models/ChainType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChainType)
export class CreateOneChainTypeResolver {
  @TypeGraphQL.Mutation(_returns => ChainType, {
    nullable: false
  })
  async createOneChainType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneChainTypeArgs): Promise<ChainType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chainType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
