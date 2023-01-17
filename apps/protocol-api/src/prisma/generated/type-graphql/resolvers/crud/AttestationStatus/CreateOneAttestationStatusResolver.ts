import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAttestationStatusArgs } from "./args/CreateOneAttestationStatusArgs";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AttestationStatus)
export class CreateOneAttestationStatusResolver {
  @TypeGraphQL.Mutation(_returns => AttestationStatus, {
    nullable: false
  })
  async createOneAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAttestationStatusArgs): Promise<AttestationStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
