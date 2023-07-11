import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstContributionPaymentOrThrowArgs } from "./args/FindFirstContributionPaymentOrThrowArgs";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class FindFirstContributionPaymentOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContributionPayment, {
    nullable: true
  })
  async findFirstContributionPaymentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContributionPaymentOrThrowArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
