import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAttestationArgs } from "./args/AggregateAttestationArgs";
import { Attestation } from "../../../models/Attestation";
import { AggregateAttestation } from "../../outputs/AggregateAttestation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attestation)
export class AggregateAttestationResolver {
  @TypeGraphQL.Query(_returns => AggregateAttestation, {
    nullable: false
  })
  async aggregateAttestation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttestationArgs): Promise<AggregateAttestation> {
    return getPrismaFromContext(ctx).attestation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
