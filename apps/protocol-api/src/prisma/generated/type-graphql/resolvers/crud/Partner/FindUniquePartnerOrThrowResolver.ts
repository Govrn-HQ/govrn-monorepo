import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePartnerOrThrowArgs } from "./args/FindUniquePartnerOrThrowArgs";
import { Partner } from "../../../models/Partner";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Partner)
export class FindUniquePartnerOrThrowResolver {
  @TypeGraphQL.Query(_returns => Partner, {
    nullable: true
  })
  async getPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePartnerOrThrowArgs): Promise<Partner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).partner.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
