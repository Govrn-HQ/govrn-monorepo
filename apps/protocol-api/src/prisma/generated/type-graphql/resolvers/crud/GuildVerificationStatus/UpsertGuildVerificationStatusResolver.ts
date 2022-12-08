import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertGuildVerificationStatusArgs } from "./args/UpsertGuildVerificationStatusArgs";
import { GuildVerificationStatus } from "../../../models/GuildVerificationStatus";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildVerificationStatus)
export class UpsertGuildVerificationStatusResolver {
  @TypeGraphQL.Mutation(_returns => GuildVerificationStatus, {
    nullable: false
  })
  async upsertGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertGuildVerificationStatusArgs): Promise<GuildVerificationStatus> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
