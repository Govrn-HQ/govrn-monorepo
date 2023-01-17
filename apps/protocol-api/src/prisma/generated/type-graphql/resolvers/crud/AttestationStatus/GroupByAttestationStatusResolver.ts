import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAttestationStatusArgs } from "./args/GroupByAttestationStatusArgs";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { AttestationStatusGroupBy } from "../../outputs/AttestationStatusGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationStatus)
export class GroupByAttestationStatusResolver {
  @TypeGraphQL.Query(_returns => [AttestationStatusGroupBy], {
    nullable: false
  })
  async groupByAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAttestationStatusArgs): Promise<AttestationStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
