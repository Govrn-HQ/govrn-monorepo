import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class VerificationSettingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: true
  })
  async guild(@TypeGraphQL.Root() verificationSetting: VerificationSetting, @TypeGraphQL.Ctx() ctx: any): Promise<Guild | null> {
    return getPrismaFromContext(ctx).verificationSetting.findUnique({
      where: {
        id: verificationSetting.id,
      },
    }).guild({});
  }
}
