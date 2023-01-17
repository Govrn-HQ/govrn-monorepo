import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAttestationStatusArgs } from "./args/UpdateOneAttestationStatusArgs";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationStatus)
export class UpdateOneAttestationStatusResolver {
  @TypeGraphQL.Mutation(_returns => AttestationStatus, {
    nullable: true
  })
  async updateOneAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAttestationStatusArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
