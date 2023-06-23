import * as TypeGraphQL from "type-graphql";
import { Chain } from "../../../models/Chain";
import { Contribution } from "../../../models/Contribution";
import { SplitContract } from "../../../models/SplitContract";
import { ChainContributionsArgs } from "./args/ChainContributionsArgs";
import { ChainSplit_contractsArgs } from "./args/ChainSplit_contractsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [SplitContract], {
    nullable: false
  })
  async split_contracts(@TypeGraphQL.Root() chain: Chain, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChainSplit_contractsArgs): Promise<SplitContract[]> {
    return getPrismaFromContext(ctx).chain.findUnique({
      where: {
        id: chain.id,
      },
    }).split_contracts(args);
  }
}
