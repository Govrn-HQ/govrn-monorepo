import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscordUserAvgAggregate } from "../outputs/DiscordUserAvgAggregate";
import { DiscordUserCountAggregate } from "../outputs/DiscordUserCountAggregate";
import { DiscordUserMaxAggregate } from "../outputs/DiscordUserMaxAggregate";
import { DiscordUserMinAggregate } from "../outputs/DiscordUserMinAggregate";
import { DiscordUserSumAggregate } from "../outputs/DiscordUserSumAggregate";

@TypeGraphQL.ObjectType("DiscordUserGroupBy", {
  isAbstract: true
})
export class DiscordUserGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  discord_id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_token!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active_token!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enable_notifications!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enable_submit_reminder!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  submit_reminder_period_min!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enable_mint_notification!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  mint_notification_period_min!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enable_new_guild_notification!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  new_guild_notification_period_min!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enable_attribution_notification!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  attribution_notification_period_min!: number;

  @TypeGraphQL.Field(_type => DiscordUserCountAggregate, {
    nullable: true
  })
  _count!: DiscordUserCountAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserAvgAggregate, {
    nullable: true
  })
  _avg!: DiscordUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserSumAggregate, {
    nullable: true
  })
  _sum!: DiscordUserSumAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserMinAggregate, {
    nullable: true
  })
  _min!: DiscordUserMinAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserMaxAggregate, {
    nullable: true
  })
  _max!: DiscordUserMaxAggregate | null;
}
