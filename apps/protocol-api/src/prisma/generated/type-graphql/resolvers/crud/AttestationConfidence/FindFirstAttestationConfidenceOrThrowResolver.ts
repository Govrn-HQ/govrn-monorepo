import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAttestationConfidenceOrThrowArgs } from "./args/FindFirstAttestationConfidenceOrThrowArgs";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class FindFirstAttestationConfidenceOrThrowResolver {
  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async findFirstAttestationConfidenceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationConfidenceOrThrowArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
