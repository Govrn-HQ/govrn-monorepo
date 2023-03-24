import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { VerificationSettingGuildsArgs } from "./args/VerificationSettingGuildsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSetting)
export class VerificationSettingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Guild], {
    nullable: false
  })
  async guilds(@TypeGraphQL.Root() verificationSetting: VerificationSetting, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: VerificationSettingGuildsArgs): Promise<Guild[]> {
    return getPrismaFromContext(ctx).verificationSetting.findUnique({
      where: {
        id: verificationSetting.id,
      },
    }).guilds(args);
  }
}
