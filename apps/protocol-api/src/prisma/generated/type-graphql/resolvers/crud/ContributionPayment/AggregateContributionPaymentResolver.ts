import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateContributionPaymentArgs } from "./args/AggregateContributionPaymentArgs";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { AggregateContributionPayment } from "../../outputs/AggregateContributionPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class AggregateContributionPaymentResolver {
  @TypeGraphQL.Query(_returns => AggregateContributionPayment, {
    nullable: false
  })
  async aggregateContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContributionPaymentArgs): Promise<AggregateContributionPayment> {
    return getPrismaFromContext(ctx).contributionPayment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
