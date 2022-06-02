import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attestation } from "../models/Attestation";
import { ChainType } from "../models/ChainType";
import { Contribution } from "../models/Contribution";
import { DiscordUser } from "../models/DiscordUser";
import { GuildUser } from "../models/GuildUser";
import { LinearUser } from "../models/LinearUser";
import { Partner } from "../models/Partner";
import { TwitterUser } from "../models/TwitterUser";
import { UserActivity } from "../models/UserActivity";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
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
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  chain_type_id!: number;

  chain_type?: ChainType;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  full_name?: string | null;

  activities?: UserActivity[];

  attestations?: Attestation[];

  contributionPartners?: Partner[];

  contributions?: Contribution[];

  linear_users?: LinearUser[];

  guild_users?: GuildUser[];

  twitter_user?: TwitterUser | null;

  discord_users?: DiscordUser[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
