import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueContributionPaymentOrThrowArgs } from "./args/FindUniqueContributionPaymentOrThrowArgs";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class FindUniqueContributionPaymentOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContributionPayment, {
    nullable: true
  })
  async getContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContributionPaymentOrThrowArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
