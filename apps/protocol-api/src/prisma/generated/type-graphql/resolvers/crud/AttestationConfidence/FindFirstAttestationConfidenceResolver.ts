import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAttestationConfidenceArgs } from "./args/FindFirstAttestationConfidenceArgs";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class FindFirstAttestationConfidenceResolver {
  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async findFirstAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
