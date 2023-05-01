import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCanonicalGuildActivityTypeArgs } from "./args/GroupByCanonicalGuildActivityTypeArgs";
import { CanonicalGuildActivityType } from "../../../models/CanonicalGuildActivityType";
import { CanonicalGuildActivityTypeGroupBy } from "../../outputs/CanonicalGuildActivityTypeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CanonicalGuildActivityType)
export class GroupByCanonicalGuildActivityTypeResolver {
  @TypeGraphQL.Query(_returns => [CanonicalGuildActivityTypeGroupBy], {
    nullable: false
  })
  async groupByCanonicalGuildActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCanonicalGuildActivityTypeArgs): Promise<CanonicalGuildActivityTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).canonicalGuildActivityType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
