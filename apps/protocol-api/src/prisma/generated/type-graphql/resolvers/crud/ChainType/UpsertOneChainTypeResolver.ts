import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneChainTypeArgs } from "./args/UpsertOneChainTypeArgs";
import { ChainType } from "../../../models/ChainType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChainType)
export class UpsertOneChainTypeResolver {
  @TypeGraphQL.Mutation(_returns => ChainType, {
    nullable: false
  })
  async upsertOneChainType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneChainTypeArgs): Promise<ChainType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chainType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
