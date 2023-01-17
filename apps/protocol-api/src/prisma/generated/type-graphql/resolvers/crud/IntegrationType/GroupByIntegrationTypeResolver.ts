import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByIntegrationTypeArgs } from "./args/GroupByIntegrationTypeArgs";
import { IntegrationType } from "../../../models/IntegrationType";
import { IntegrationTypeGroupBy } from "../../outputs/IntegrationTypeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationType)
export class GroupByIntegrationTypeResolver {
  @TypeGraphQL.Query(_returns => [IntegrationTypeGroupBy], {
    nullable: false
  })
  async groupByIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIntegrationTypeArgs): Promise<IntegrationTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
