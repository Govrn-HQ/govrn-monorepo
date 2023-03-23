import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstVerificationSettingArgs } from "./args/FindFirstVerificationSettingArgs";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class FindFirstVerificationSettingResolver {
  @TypeGraphQL.Query(_returns => VerificationSetting, {
    nullable: true
  })
  async findFirstVerificationSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerificationSettingArgs): Promise<VerificationSetting | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verificationSetting.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
