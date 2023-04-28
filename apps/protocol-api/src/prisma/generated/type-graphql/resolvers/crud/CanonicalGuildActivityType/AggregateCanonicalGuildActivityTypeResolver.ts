import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCanonicalGuildActivityTypeArgs } from "./args/AggregateCanonicalGuildActivityTypeArgs";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { AggregateCanonicalGuildActivityType } from "../../outputs/AggregateCanonicalGuildActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class AggregateCanonicalGuildActivityTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateCanonicalGuildActivityType, {
    nullable: false
  })
  async aggregateCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCanonicalGuildActivityTypeArgs): Promise<AggregateCanonicalGuildActivityType> {
    return getPrismaFromContext(ctx).canonicalGuildActivityType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
