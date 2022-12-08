import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Guild } from "../models/Guild";
import { GuildVerificationStatusCount } from "../resolvers/outputs/GuildVerificationStatusCount";

@TypeGraphQL.ObjectType("GuildVerificationStatus", {
  isAbstract: true
})
export class GuildVerificationStatus {
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

  Guild?: Guild[];

  @TypeGraphQL.Field(_type => GuildVerificationStatusCount, {
    nullable: true
  })
  _count?: GuildVerificationStatusCount | null;
}
