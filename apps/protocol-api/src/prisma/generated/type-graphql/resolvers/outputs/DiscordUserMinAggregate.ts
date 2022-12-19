import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("DiscordUserMinAggregate", {
  isAbstract: true
})
export class DiscordUserMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discord_id!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_id!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_notifications!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_submit_reminder_period!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  submit_reminder_period_min!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_mint_notification_period!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mint_notification_period_min!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_new_guild_notification_period!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  new_guild_notification_period_min!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_attribution_notification_period!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attribution_notification_period_min!: number | null;
}
