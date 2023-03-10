import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { VerificationSettings } from "../../../models/VerificationSettings";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationSettings)
export class VerificationSettingsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: true
  })
  async guild(@TypeGraphQL.Root() verificationSettings: VerificationSettings, @TypeGraphQL.Ctx() ctx: any): Promise<Guild | null> {
    return getPrismaFromContext(ctx).verificationSettings.findUnique({
      where: {
        id: verificationSettings.id,
      },
    }).guild({});
  }
}
