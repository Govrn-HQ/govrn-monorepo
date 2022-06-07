import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GuildContribution } from "../models/GuildContribution";
import { GuildUser } from "../models/GuildUser";
import { TwitterAccount } from "../models/TwitterAccount";
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

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  discord_id?: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  congrats_channel?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo?: string | null;

  contributions?: GuildContribution[];

  users?: GuildUser[];

  twitter_account?: TwitterAccount | null;

  @TypeGraphQL.Field(_type => GuildCount, {
    nullable: true
  })
  _count?: GuildCount | null;
}
