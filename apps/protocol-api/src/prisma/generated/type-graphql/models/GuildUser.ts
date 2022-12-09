import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Guild } from "../models/Guild";
import { GuildMembershipStatus } from "../models/GuildMembershipStatus";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("GuildUser", {
  isAbstract: true
})
export class GuildUser {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guild_id!: number;

  guild?: Guild;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  membership_status_id!: number;

  membershipStatus?: GuildMembershipStatus;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  favorite!: boolean;
}
