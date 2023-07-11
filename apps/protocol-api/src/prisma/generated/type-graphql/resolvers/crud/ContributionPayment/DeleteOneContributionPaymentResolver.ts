import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneContributionPaymentArgs } from "./args/DeleteOneContributionPaymentArgs";
import { ContributionPayment } from "../../../models/ContributionPayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionPayment)
export class DeleteOneContributionPaymentResolver {
  @TypeGraphQL.Mutation(_returns => ContributionPayment, {
    nullable: true
  })
  async deleteOneContributionPayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneContributionPaymentArgs): Promise<ContributionPayment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionPayment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
