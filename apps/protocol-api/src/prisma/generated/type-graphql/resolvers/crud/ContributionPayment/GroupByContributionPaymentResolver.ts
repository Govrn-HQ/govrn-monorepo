import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByContributionPaymentArgs } from "./args/GroupByContributionPaymentArgs";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { ContributionPaymentGroupBy } from "../../outputs/ContributionPaymentGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class GroupByContributionPaymentResolver {
  @TypeGraphQL.Query(_returns => [ContributionPaymentGroupBy], {
    nullable: false
  })
  async groupByContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContributionPaymentArgs): Promise<ContributionPaymentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
