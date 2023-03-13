import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GuildActivityType } from "../models/GuildActivityType";
import { GuildContribution } from "../models/GuildContribution";
import { GuildImport } from "../models/GuildImport";
import { GuildUser } from "../models/GuildUser";
import { TwitterAccount } from "../models/TwitterAccount";
import { VerificationSettings } from "../models/VerificationSettings";
import { GuildStatus } from "../enums/GuildStatus";
import { GuildCount } from "../resolvers/outputs/GuildCount";

@TypeGraphQL.ObjectType("Guild", {
  isAbstract: true
})
export class Guild {
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
  discord_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  congrats_channel?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo?: string | null;

  @TypeGraphQL.Field(_type => GuildStatus, {
    nullable: false
  })
  status!: "INPUTTED" | "VALIDATED" | "ONBOARDED";

  contributions?: GuildContribution[];

  users?: GuildUser[];

  twitter_accounts?: TwitterAccount[];

  activity_type?: GuildActivityType[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contribution_reporting_channel?: string | null;

  guild_imports?: GuildImport[];

  VerificationSettings?: VerificationSettings[];

  @TypeGraphQL.Field(_type => GuildCount, {
    nullable: true
  })
  _count?: GuildCount | null;
}
