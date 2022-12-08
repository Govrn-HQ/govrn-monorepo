import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGuildVerificationStatusArgs } from "./args/FindUniqueGuildVerificationStatusArgs";
import { GuildVerificationStatus } from "../../../models/GuildVerificationStatus";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildVerificationStatus)
export class FindUniqueGuildVerificationStatusResolver {
  @TypeGraphQL.Query(_returns => GuildVerificationStatus, {
    nullable: true
  })
  async guildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGuildVerificationStatusArgs): Promise<GuildVerificationStatus | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
