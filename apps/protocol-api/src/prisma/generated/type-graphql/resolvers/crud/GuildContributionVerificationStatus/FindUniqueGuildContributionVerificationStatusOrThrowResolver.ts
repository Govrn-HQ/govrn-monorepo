import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGuildContributionVerificationStatusOrThrowArgs } from "./args/FindUniqueGuildContributionVerificationStatusOrThrowArgs";
import { GuildContributionVerificationStatus } from "../../../models/GuildContributionVerificationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContributionVerificationStatus)
export class FindUniqueGuildContributionVerificationStatusOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildContributionVerificationStatus, {
    nullable: true
  })
  async getGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildContributionVerificationStatusOrThrowArgs): Promise<GuildContributionVerificationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
