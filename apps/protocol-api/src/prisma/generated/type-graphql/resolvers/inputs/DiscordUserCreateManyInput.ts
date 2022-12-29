import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("DiscordUserCreateManyInput", {
  isAbstract: true
})
export class DiscordUserCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  discord_id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_notifications?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_submit_reminder?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  submit_reminder_period_min?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_mint_notification?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mint_notification_period_min?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_new_guild_notification?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  new_guild_notification_period_min?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_attribution_notification?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attribution_notification_period_min?: number | undefined;
}
