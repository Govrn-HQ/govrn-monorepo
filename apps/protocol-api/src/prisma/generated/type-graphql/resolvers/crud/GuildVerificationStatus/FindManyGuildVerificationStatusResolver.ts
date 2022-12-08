import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyGuildVerificationStatusArgs } from "./args/FindManyGuildVerificationStatusArgs";
import { GuildVerificationStatus } from "../../../models/GuildVerificationStatus";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildVerificationStatus)
export class FindManyGuildVerificationStatusResolver {
  @TypeGraphQL.Query(_returns => [GuildVerificationStatus], {
    nullable: false
  })
  async guildVerificationStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuildVerificationStatusArgs): Promise<GuildVerificationStatus[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
