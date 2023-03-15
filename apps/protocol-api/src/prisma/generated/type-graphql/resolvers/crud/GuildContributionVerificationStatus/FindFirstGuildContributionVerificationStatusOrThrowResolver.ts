import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildContributionVerificationStatusOrThrowArgs } from "./args/FindFirstGuildContributionVerificationStatusOrThrowArgs";
import { GuildContributionVerificationStatus } from "../../../models/GuildContributionVerificationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContributionVerificationStatus)
export class FindFirstGuildContributionVerificationStatusOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildContributionVerificationStatus, {
    nullable: true
  })
  async findFirstGuildContributionVerificationStatusOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildContributionVerificationStatusOrThrowArgs): Promise<GuildContributionVerificationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
