import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneContributionPaymentArgs } from "./args/UpsertOneContributionPaymentArgs";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class UpsertOneContributionPaymentResolver {
  @TypeGraphQL.Mutation(_returns => ContributionPayment, {
    nullable: false
  })
  async upsertOneContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneContributionPaymentArgs): Promise<ContributionPayment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
