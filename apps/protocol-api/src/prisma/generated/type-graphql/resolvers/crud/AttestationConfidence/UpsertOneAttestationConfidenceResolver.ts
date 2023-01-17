import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAttestationConfidenceArgs } from "./args/UpsertOneAttestationConfidenceArgs";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class UpsertOneAttestationConfidenceResolver {
  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: false
  })
  async upsertOneAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAttestationConfidenceArgs): Promise<AttestationConfidence> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
