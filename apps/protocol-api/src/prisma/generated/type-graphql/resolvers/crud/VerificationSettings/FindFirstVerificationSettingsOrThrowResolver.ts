import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstVerificationSettingsOrThrowArgs } from "./args/FindFirstVerificationSettingsOrThrowArgs";
import { VerificationSettings } from "../../../models/VerificationSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSettings)
export class FindFirstVerificationSettingsOrThrowResolver {
  @TypeGraphQL.Query(_returns => VerificationSettings, {
    nullable: true
  })
  async findFirstVerificationSettingsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerificationSettingsOrThrowArgs): Promise<VerificationSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSettings.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
