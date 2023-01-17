import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyContributionStatusArgs } from "./args/FindManyContributionStatusArgs";
import { ContributionStatus } from "../../../models/ContributionStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class FindManyContributionStatusResolver {
  @TypeGraphQL.Query(_returns => [ContributionStatus], {
    nullable: false
  })
  async contributionStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyContributionStatusArgs): Promise<ContributionStatus[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contributionStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
