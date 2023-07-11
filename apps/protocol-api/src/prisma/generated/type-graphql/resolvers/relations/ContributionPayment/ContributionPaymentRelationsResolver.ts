import * as TypeGraphQL from "type-graphql";
import { Contribution } from "../../../models/Contribution";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { SplitPayment } from "../../../models/SplitPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class ContributionPaymentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Contribution, {
    nullable: false
  })
  async contribution(@TypeGraphQL.Root() contributionPayment: ContributionPayment, @TypeGraphQL.Ctx() ctx: any): Promise<Contribution> {
    return getPrismaFromContext(ctx).contributionPayment.findUnique({
      where: {
        id: contributionPayment.id,
      },
    }).contribution({});
  }

  @TypeGraphQL.FieldResolver(_type => SplitPayment, {
    nullable: false
  })
  async split_payment(@TypeGraphQL.Root() contributionPayment: ContributionPayment, @TypeGraphQL.Ctx() ctx: any): Promise<SplitPayment> {
    return getPrismaFromContext(ctx).contributionPayment.findUnique({
      where: {
        id: contributionPayment.id,
      },
    }).split_payment({});
  }
}
