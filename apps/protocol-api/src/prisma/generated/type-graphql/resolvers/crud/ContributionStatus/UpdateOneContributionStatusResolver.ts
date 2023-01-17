import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneContributionStatusArgs } from "./args/UpdateOneContributionStatusArgs";
import { ContributionStatus } from "../../../models/ContributionStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class UpdateOneContributionStatusResolver {
  @TypeGraphQL.Mutation(_returns => ContributionStatus, {
    nullable: true
  })
  async updateOneContributionStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneContributionStatusArgs): Promise<ContributionStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
