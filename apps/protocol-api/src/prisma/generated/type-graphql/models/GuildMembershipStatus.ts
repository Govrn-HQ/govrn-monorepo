import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GuildUser } from "../models/GuildUser";
import { GuildMembershipStatusCount } from "../resolvers/outputs/GuildMembershipStatusCount";

@TypeGraphQL.ObjectType("GuildMembershipStatus", {
  isAbstract: true
})
export class GuildMembershipStatus {
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
    nullable: false
  })
  name!: string;

  guildUsers?: GuildUser[];

  @TypeGraphQL.Field(_type => GuildMembershipStatusCount, {
    nullable: true
  })
  _count?: GuildMembershipStatusCount | null;
}
