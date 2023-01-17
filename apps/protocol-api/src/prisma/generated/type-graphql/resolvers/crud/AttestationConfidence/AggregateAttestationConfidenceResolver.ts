import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAttestationConfidenceArgs } from "./args/AggregateAttestationConfidenceArgs";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { AggregateAttestationConfidence } from "../../outputs/AggregateAttestationConfidence";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class AggregateAttestationConfidenceResolver {
  @TypeGraphQL.Query(_returns => AggregateAttestationConfidence, {
    nullable: false
  })
  async aggregateAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttestationConfidenceArgs): Promise<AggregateAttestationConfidence> {
    return getPrismaFromContext(ctx).attestationConfidence.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
