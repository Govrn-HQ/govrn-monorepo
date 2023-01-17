import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAttestationOrThrowArgs } from "./args/FindFirstAttestationOrThrowArgs";
import { Attestation } from "../../../models/Attestation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attestation)
export class FindFirstAttestationOrThrowResolver {
  @TypeGraphQL.Query(_returns => Attestation, {
    nullable: true
  })
  async findFirstAttestationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationOrThrowArgs): Promise<Attestation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestation.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
