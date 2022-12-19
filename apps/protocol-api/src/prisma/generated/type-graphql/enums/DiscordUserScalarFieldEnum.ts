import * as TypeGraphQL from "type-graphql";

export enum DiscordUserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  display_name = "display_name",
  discord_id = "discord_id",
  user_id = "user_id",
  enable_notifications = "enable_notifications",
  enable_submit_reminder_period = "enable_submit_reminder_period",
  submit_reminder_period_min = "submit_reminder_period_min",
  enable_mint_notification_period = "enable_mint_notification_period",
  mint_notification_period_min = "mint_notification_period_min",
  enable_new_guild_notification_period = "enable_new_guild_notification_period",
  new_guild_notification_period_min = "new_guild_notification_period_min",
  enable_attribution_notification_period = "enable_attribution_notification_period",
  attribution_notification_period_min = "attribution_notification_period_min"
}
TypeGraphQL.registerEnumType(DiscordUserScalarFieldEnum, {
  name: "DiscordUserScalarFieldEnum",
  description: undefined,
});
