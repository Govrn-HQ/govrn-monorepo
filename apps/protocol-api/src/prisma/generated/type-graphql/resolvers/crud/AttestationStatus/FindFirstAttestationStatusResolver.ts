import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAttestationStatusArgs } from "./args/FindFirstAttestationStatusArgs";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationStatus)
export class FindFirstAttestationStatusResolver {
  @TypeGraphQL.Query(_returns => AttestationStatus, {
    nullable: true
  })
  async findFirstAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationStatusArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
