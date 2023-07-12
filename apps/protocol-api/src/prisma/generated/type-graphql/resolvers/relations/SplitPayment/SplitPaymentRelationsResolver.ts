import * as TypeGraphQL from "type-graphql";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { SplitContract } from "../../../models/SplitContract";
import { SplitPayment } from "../../../models/SplitPayment";
import { User } from "../../../models/User";
import { SplitPaymentContribution_paymentsArgs } from "./args/SplitPaymentContribution_paymentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SplitPayment)
export class SplitPaymentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async sender_user(@TypeGraphQL.Root() splitPayment: SplitPayment, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).splitPayment.findUnique({
      where: {
        id: splitPayment.id,
      },
    }).sender_user({});
  }

  @TypeGraphQL.FieldResolver(_type => SplitContract, {
    nullable: false
  })
  async split_contract(@TypeGraphQL.Root() splitPayment: SplitPayment, @TypeGraphQL.Ctx() ctx: any): Promise<SplitContract> {
    return getPrismaFromContext(ctx).splitPayment.findUnique({
      where: {
        id: splitPayment.id,
      },
    }).split_contract({});
  }

  @TypeGraphQL.FieldResolver(_type => [ContributionPayment], {
    nullable: false
  })
  async contribution_payments(@TypeGraphQL.Root() splitPayment: SplitPayment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SplitPaymentContribution_paymentsArgs): Promise<ContributionPayment[]> {
    return getPrismaFromContext(ctx).splitPayment.findUnique({
      where: {
        id: splitPayment.id,
      },
    }).contribution_payments(args);
  }
}
