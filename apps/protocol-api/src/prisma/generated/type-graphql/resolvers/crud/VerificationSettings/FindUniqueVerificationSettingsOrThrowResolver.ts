import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVerificationSettingsOrThrowArgs } from "./args/FindUniqueVerificationSettingsOrThrowArgs";
import { VerificationSettings } from "../../../models/VerificationSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSettings)
export class FindUniqueVerificationSettingsOrThrowResolver {
  @TypeGraphQL.Query(_returns => VerificationSettings, {
    nullable: true
  })
  async findUniqueVerificationSettingsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVerificationSettingsOrThrowArgs): Promise<VerificationSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSettings.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
