import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstVerificationSettingOrThrowArgs } from "./args/FindFirstVerificationSettingOrThrowArgs";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class FindFirstVerificationSettingOrThrowResolver {
  @TypeGraphQL.Query(_returns => VerificationSetting, {
    nullable: true
  })
  async findFirstVerificationSettingOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerificationSettingOrThrowArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
