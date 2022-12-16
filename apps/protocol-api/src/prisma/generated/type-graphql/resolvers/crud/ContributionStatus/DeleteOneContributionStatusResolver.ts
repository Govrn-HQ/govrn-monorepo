import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneContributionStatusArgs } from "./args/DeleteOneContributionStatusArgs";
import { ContributionStatus } from "../../../models/ContributionStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class DeleteOneContributionStatusResolver {
  @TypeGraphQL.Mutation(_returns => ContributionStatus, {
    nullable: true
  })
  async deleteOneContributionStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneContributionStatusArgs): Promise<ContributionStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
