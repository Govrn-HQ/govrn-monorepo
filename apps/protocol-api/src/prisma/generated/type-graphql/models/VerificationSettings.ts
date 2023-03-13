import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Guild } from "../models/Guild";

@TypeGraphQL.ObjectType("VerificationSettings", {
  isAbstract: true
})
export class VerificationSettings {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  guild_id?: number | null;

  guild?: Guild | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  num_of_attestations!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
