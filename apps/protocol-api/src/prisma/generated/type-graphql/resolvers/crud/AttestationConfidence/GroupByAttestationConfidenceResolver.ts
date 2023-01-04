import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAttestationConfidenceArgs } from "./args/GroupByAttestationConfidenceArgs";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { AttestationConfidenceGroupBy } from "../../outputs/AttestationConfidenceGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class GroupByAttestationConfidenceResolver {
  @TypeGraphQL.Query(_returns => [AttestationConfidenceGroupBy], {
    nullable: false
  })
  async groupByAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAttestationConfidenceArgs): Promise<AttestationConfidenceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
