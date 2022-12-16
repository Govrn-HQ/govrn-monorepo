import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { CreateManyAttestationConfidenceArgs } from "./args/CreateManyAttestationConfidenceArgs";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class CreateManyAttestationConfidenceResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAttestationConfidenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
