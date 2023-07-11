import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindManyContributionPaymentArgs } from "./args/FindManyContributionPaymentArgs";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class FindManyContributionPaymentResolver {
  @TypeGraphQL.Query(_returns => [ContributionPayment], {
    nullable: false
  })
  async contributionPayments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyContributionPaymentArgs): Promise<ContributionPayment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
