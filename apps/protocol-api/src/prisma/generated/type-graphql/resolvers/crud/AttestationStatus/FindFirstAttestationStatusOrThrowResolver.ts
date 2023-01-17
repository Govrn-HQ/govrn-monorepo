import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAttestationStatusOrThrowArgs } from "./args/FindFirstAttestationStatusOrThrowArgs";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationStatus)
export class FindFirstAttestationStatusOrThrowResolver {
  @TypeGraphQL.Query(_returns => AttestationStatus, {
    nullable: true
  })
  async findFirstAttestationStatusOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationStatusOrThrowArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
