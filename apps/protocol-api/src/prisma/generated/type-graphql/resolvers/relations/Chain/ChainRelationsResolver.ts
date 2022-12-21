import * as TypeGraphQL from "type-graphql";
import { Chain } from "../../../models/Chain";
import { Contribution } from "../../../models/Contribution";
import { ChainContributionsArgs } from "./args/ChainContributionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Chain)
export class ChainRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Contribution], {
    nullable: false
  })
  async contributions(@TypeGraphQL.Root() chain: Chain, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChainContributionsArgs): Promise<Contribution[]> {
    return getPrismaFromContext(ctx).chain.findUnique({
      where: {
        id: chain.id,
      },
    }).contributions(args);
  }
}
