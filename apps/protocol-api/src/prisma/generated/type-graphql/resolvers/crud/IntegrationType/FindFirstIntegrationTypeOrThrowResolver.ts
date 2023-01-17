import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIntegrationTypeOrThrowArgs } from "./args/FindFirstIntegrationTypeOrThrowArgs";
import { IntegrationType } from "../../../models/IntegrationType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationType)
export class FindFirstIntegrationTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => IntegrationType, {
    nullable: true
  })
  async findFirstIntegrationTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIntegrationTypeOrThrowArgs): Promise<IntegrationType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
