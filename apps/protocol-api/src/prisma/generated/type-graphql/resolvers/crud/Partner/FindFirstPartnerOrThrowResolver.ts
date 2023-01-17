import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPartnerOrThrowArgs } from "./args/FindFirstPartnerOrThrowArgs";
import { Partner } from "../../../models/Partner";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Partner)
export class FindFirstPartnerOrThrowResolver {
  @TypeGraphQL.Query(_returns => Partner, {
    nullable: true
  })
  async findFirstPartnerOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPartnerOrThrowArgs): Promise<Partner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).partner.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
