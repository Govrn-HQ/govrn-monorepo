import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIntegrationTypeOrThrowArgs } from "./args/FindUniqueIntegrationTypeOrThrowArgs";
import { IntegrationType } from "../../../models/IntegrationType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationType)
export class FindUniqueIntegrationTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => IntegrationType, {
    nullable: true
  })
  async getIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationTypeOrThrowArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
