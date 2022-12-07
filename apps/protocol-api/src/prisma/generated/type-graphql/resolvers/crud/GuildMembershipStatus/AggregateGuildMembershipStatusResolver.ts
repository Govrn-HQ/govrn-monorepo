import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildMembershipStatusArgs } from "./args/AggregateGuildMembershipStatusArgs";
import { GuildMembershipStatus } from "../../../models/GuildMembershipStatus";
import { AggregateGuildMembershipStatus } from "../../outputs/AggregateGuildMembershipStatus";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildMembershipStatus)
export class AggregateGuildMembershipStatusResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildMembershipStatus, {
    nullable: false
  })
  async aggregateGuildMembershipStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildMembershipStatusArgs): Promise<AggregateGuildMembershipStatus> {
    return getPrismaFromContext(ctx).guildMembershipStatus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
