import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildVerificationStatusArgs } from "./args/AggregateGuildVerificationStatusArgs";
import { GuildVerificationStatus } from "../../../models/GuildVerificationStatus";
import { AggregateGuildVerificationStatus } from "../../outputs/AggregateGuildVerificationStatus";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildVerificationStatus)
export class AggregateGuildVerificationStatusResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildVerificationStatus, {
    nullable: false
  })
  async aggregateGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildVerificationStatusArgs): Promise<AggregateGuildVerificationStatus> {
    return getPrismaFromContext(ctx).guildVerificationStatus.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
