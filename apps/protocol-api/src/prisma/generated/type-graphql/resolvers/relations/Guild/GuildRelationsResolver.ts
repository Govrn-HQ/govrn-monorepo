import * as TypeGraphQL from "type-graphql";
import { Guild } from "../../../models/Guild";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { GuildContribution } from "../../../models/GuildContribution";
import { GuildImport } from "../../../models/GuildImport";
import { GuildUser } from "../../../models/GuildUser";
import { TwitterAccount } from "../../../models/TwitterAccount";
import { VerificationSetting } from "../../../models/VerificationSetting";
import { GuildActivity_typeArgs } from "./args/GuildActivity_typeArgs";
import { GuildContributionsArgs } from "./args/GuildContributionsArgs";
import { GuildGuild_importsArgs } from "./args/GuildGuild_importsArgs";
import { GuildTwitter_accountsArgs } from "./args/GuildTwitter_accountsArgs";
import { GuildUsersArgs } from "./args/GuildUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Guild)
export class GuildRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [GuildContribution], {
    nullable: false
  })
  async contributions(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildContributionsArgs): Promise<GuildContribution[]> {
    return getPrismaFromContext(ctx).guild.findUnique({
      where: {
        id: guild.id,
      },
    }).contributions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [GuildUser], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildUsersArgs): Promise<GuildUser[]> {
    return getPrismaFromContext(ctx).guild.findUnique({
      where: {
        id: guild.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TwitterAccount], {
    nullable: false
  })
  async twitter_accounts(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildTwitter_accountsArgs): Promise<TwitterAccount[]> {
    return getPrismaFromContext(ctx).guild.findUnique({
      where: {
        id: guild.id,
      },
    }).twitter_accounts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [GuildActivityType], {
    nullable: false
  })
  async activity_type(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildActivity_typeArgs): Promise<GuildActivityType[]> {
    return getPrismaFromContext(ctx).guild.findUnique({
      where: {
        id: guild.id,
      },
    }).activity_type(args);
  }

  @TypeGraphQL.FieldResolver(_type => [GuildImport], {
    nullable: false
  })
  async guild_imports(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildGuild_importsArgs): Promise<GuildImport[]> {
    return getPrismaFromContext(ctx).guild.findUnique({
      where: {
        id: guild.id,
      },
    }).guild_imports(args);
  }

  @TypeGraphQL.FieldResolver(_type => VerificationSetting, {
    nullable: true
  })
  async verification_setting(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any): Promise<VerificationSetting | null> {
    return getPrismaFromContext(ctx).guild.findUnique({
      where: {
        id: guild.id,
      },
    }).verification_setting({});
  }
}
