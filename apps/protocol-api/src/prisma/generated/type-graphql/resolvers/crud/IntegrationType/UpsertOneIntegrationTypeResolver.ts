import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIntegrationTypeArgs } from "./args/UpsertOneIntegrationTypeArgs";
import { IntegrationType } from "../../../models/IntegrationType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationType)
export class UpsertOneIntegrationTypeResolver {
  @TypeGraphQL.Mutation(_returns => IntegrationType, {
    nullable: false
  })
  async upsertOneIntegrationType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIntegrationTypeArgs): Promise<IntegrationType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
