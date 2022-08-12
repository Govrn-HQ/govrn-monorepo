import * as TypeGraphQL from "type-graphql";
import { Contribution } from "../../../models/Contribution";
import { ContributionStatus } from "../../../models/ContributionStatus";
import { ContributionStatusContributionsArgs } from "./args/ContributionStatusContributionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContributionStatus)
export class ContributionStatusRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Contribution], {
    nullable: false
  })
  async contributions(@TypeGraphQL.Root() contributionStatus: ContributionStatus, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ContributionStatusContributionsArgs): Promise<Contribution[]> {
    return getPrismaFromContext(ctx).contributionStatus.findUnique({
      where: {
        id: contributionStatus.id,
      },
    }).contributions(args);
  }
}
