import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAttestationConfidenceArgs } from "./args/FindUniqueAttestationConfidenceArgs";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class FindUniqueAttestationConfidenceResolver {
  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async attestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
