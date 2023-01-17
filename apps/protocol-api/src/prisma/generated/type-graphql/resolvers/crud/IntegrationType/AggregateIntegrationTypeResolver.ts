import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationTypeArgs } from "./args/AggregateIntegrationTypeArgs";
import { IntegrationType } from "../../../models/IntegrationType";
import { AggregateIntegrationType } from "../../outputs/AggregateIntegrationType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationType)
export class AggregateIntegrationTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateIntegrationType, {
    nullable: false
  })
  async aggregateIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIntegrationTypeArgs): Promise<AggregateIntegrationType> {
    return getPrismaFromContext(ctx).integrationType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
