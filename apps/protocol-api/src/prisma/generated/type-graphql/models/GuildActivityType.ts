import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ActivityType } from "../models/ActivityType";
import { Guild } from "../models/Guild";

@TypeGraphQL.ObjectType("GuildActivityType", {
  isAbstract: true
})
export class GuildActivityType {
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
  guild_id!: number;

  guild?: Guild;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  activity_type_id!: number;

  activity_type?: ActivityType;
}
