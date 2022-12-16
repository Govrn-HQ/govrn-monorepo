import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAttestationStatusArgs } from "./args/AggregateAttestationStatusArgs";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { AggregateAttestationStatus } from "../../outputs/AggregateAttestationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationStatus)
export class AggregateAttestationStatusResolver {
  @TypeGraphQL.Query(_returns => AggregateAttestationStatus, {
    nullable: false
  })
  async aggregateAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttestationStatusArgs): Promise<AggregateAttestationStatus> {
    return getPrismaFromContext(ctx).attestationStatus.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
