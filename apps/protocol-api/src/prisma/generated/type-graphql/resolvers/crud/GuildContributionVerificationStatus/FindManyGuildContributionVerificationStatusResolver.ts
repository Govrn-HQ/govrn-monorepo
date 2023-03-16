import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindManyGuildContributionVerificationStatusArgs } from "./args/FindManyGuildContributionVerificationStatusArgs";
import { GuildContributionVerificationStatus } from "../../../models/GuildContributionVerificationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContributionVerificationStatus)
export class FindManyGuildContributionVerificationStatusResolver {
  @TypeGraphQL.Query(_returns => [GuildContributionVerificationStatus], {
    nullable: false
  })
  async guildContributionVerificationStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
