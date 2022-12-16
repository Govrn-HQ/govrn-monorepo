import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindManyAttestationConfidenceArgs } from "./args/FindManyAttestationConfidenceArgs";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class FindManyAttestationConfidenceResolver {
  @TypeGraphQL.Query(_returns => [AttestationConfidence], {
    nullable: false
  })
  async attestationConfidences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAttestationConfidenceArgs): Promise<AttestationConfidence[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
