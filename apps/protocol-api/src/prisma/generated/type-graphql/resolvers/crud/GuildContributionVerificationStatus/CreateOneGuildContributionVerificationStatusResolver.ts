import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneGuildContributionVerificationStatusArgs } from "./args/CreateOneGuildContributionVerificationStatusArgs";
import { GuildContributionVerificationStatus } from "../../../models/GuildContributionVerificationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildContributionVerificationStatus)
export class CreateOneGuildContributionVerificationStatusResolver {
  @TypeGraphQL.Mutation(_returns => GuildContributionVerificationStatus, {
    nullable: false
  })
  async createOneGuildContributionVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGuildContributionVerificationStatusArgs): Promise<GuildContributionVerificationStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildContributionVerificationStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
