import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscordUserOrderByWithRelationInput } from "../../../inputs/DiscordUserOrderByWithRelationInput";
import { DiscordUserWhereInput } from "../../../inputs/DiscordUserWhereInput";
import { DiscordUserWhereUniqueInput } from "../../../inputs/DiscordUserWhereUniqueInput";
import { DiscordUserScalarFieldEnum } from "../../../../enums/DiscordUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserDiscord_usersArgs {
  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  where?: DiscordUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DiscordUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: DiscordUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "display_name" | "discord_id" | "user_id" | "enable_notifications" | "enable_submit_reminder_period" | "submit_reminder_period_min" | "enable_mint_notification_period" | "mint_notification_period_min" | "enable_new_guild_notification_period" | "new_guild_notification_period_min" | "enable_attribution_notification_period" | "attribution_notification_period_min"> | undefined;
}
