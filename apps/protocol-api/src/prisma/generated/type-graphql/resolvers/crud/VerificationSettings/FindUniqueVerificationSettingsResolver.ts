import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVerificationSettingsArgs } from "./args/FindUniqueVerificationSettingsArgs";
import { VerificationSettings } from "../../../models/VerificationSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSettings)
export class FindUniqueVerificationSettingsResolver {
  @TypeGraphQL.Query(_returns => VerificationSettings, {
    nullable: true
  })
  async findUniqueVerificationSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVerificationSettingsArgs): Promise<VerificationSettings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSettings.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
