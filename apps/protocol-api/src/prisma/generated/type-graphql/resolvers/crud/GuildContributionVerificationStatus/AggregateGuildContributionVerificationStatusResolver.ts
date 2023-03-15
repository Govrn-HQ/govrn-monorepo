import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildContributionVerificationStatusArgs } from "./args/AggregateGuildContributionVerificationStatusArgs";
import { GuildContributionVerificationStatus } from "../../../models/GuildContributionVerificationStatus";
import { AggregateGuildContributionVerificationStatus } from "../../outputs/AggregateGuildContributionVerificationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContributionVerificationStatus)
export class AggregateGuildContributionVerificationStatusResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildContributionVerificationStatus, {
    nullable: false
  })
  async aggregateGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildContributionVerificationStatusArgs): Promise<AggregateGuildContributionVerificationStatus> {
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
