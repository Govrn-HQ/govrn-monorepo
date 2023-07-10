import * as TypeGraphQL from "type-graphql";
import { Chain } from "../../../models/Chain";
import { SplitContract } from "../../../models/SplitContract";
import { SplitPayment } from "../../../models/SplitPayment";
import { UserSplitContract } from "../../../models/UserSplitContract";
import { SplitContractSplit_paymentsArgs } from "./args/SplitContractSplit_paymentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitContract)
export class SplitContractRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Chain, {
    nullable: false
  })
  async chain(@TypeGraphQL.Root() splitContract: SplitContract, @TypeGraphQL.Ctx() ctx: any): Promise<Chain> {
    return getPrismaFromContext(ctx).splitContract.findUnique({
      where: {
        id: splitContract.id,
      },
    }).chain({});
  }

  @TypeGraphQL.FieldResolver(_type => [SplitPayment], {
    nullable: false
  })
  async split_payments(@TypeGraphQL.Root() splitContract: SplitContract, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SplitContractSplit_paymentsArgs): Promise<SplitPayment[]> {
    return getPrismaFromContext(ctx).splitContract.findUnique({
      where: {
        id: splitContract.id,
      },
    }).split_payments(args);
  }

  @TypeGraphQL.FieldResolver(_type => UserSplitContract, {
    nullable: true
  })
  async user_split_contract(@TypeGraphQL.Root() splitContract: SplitContract, @TypeGraphQL.Ctx() ctx: any): Promise<UserSplitContract | null> {
    return getPrismaFromContext(ctx).splitContract.findUnique({
      where: {
        id: splitContract.id,
      },
    }).user_split_contract({});
  }
}
