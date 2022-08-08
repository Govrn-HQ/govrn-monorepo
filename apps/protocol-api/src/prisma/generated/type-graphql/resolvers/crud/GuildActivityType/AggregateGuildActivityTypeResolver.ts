import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildActivityTypeArgs } from "./args/AggregateGuildActivityTypeArgs";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { AggregateGuildActivityType } from "../../outputs/AggregateGuildActivityType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildActivityType)
export class AggregateGuildActivityTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateGuildActivityType, {
    nullable: false
  })
  async aggregateGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildActivityTypeArgs): Promise<AggregateGuildActivityType> {
    return getPrismaFromContext(ctx).guildActivityType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
