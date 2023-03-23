import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Guild } from "../models/Guild";
import { VerificationSettingCount } from "../resolvers/outputs/VerificationSettingCount";

@TypeGraphQL.ObjectType("VerificationSetting", {
  isAbstract: true
})
export class VerificationSetting {
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
  num_of_attestations!: number;

  guilds?: Guild[];

  @TypeGraphQL.Field(_type => VerificationSettingCount, {
    nullable: true
  })
  _count?: VerificationSettingCount | null;
}
