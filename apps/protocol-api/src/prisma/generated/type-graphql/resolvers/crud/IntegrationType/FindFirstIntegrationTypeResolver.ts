import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIntegrationTypeArgs } from "./args/FindFirstIntegrationTypeArgs";
import { IntegrationType } from "../../../models/IntegrationType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationType)
export class FindFirstIntegrationTypeResolver {
  @TypeGraphQL.Query(_returns => IntegrationType, {
    nullable: true
  })
  async findFirstIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIntegrationTypeArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
