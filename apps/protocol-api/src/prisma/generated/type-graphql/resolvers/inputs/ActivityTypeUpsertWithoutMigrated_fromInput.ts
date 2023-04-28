import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateWithoutMigrated_fromInput";
import { ActivityTypeUpdateWithoutMigrated_fromInput } from "../inputs/ActivityTypeUpdateWithoutMigrated_fromInput";

@TypeGraphQL.InputType("ActivityTypeUpsertWithoutMigrated_fromInput", {
  isAbstract: true
})
export class ActivityTypeUpsertWithoutMigrated_fromInput {
  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutMigrated_fromInput, {
    nullable: false
  })
  update!: ActivityTypeUpdateWithoutMigrated_fromInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutMigrated_fromInput, {
    nullable: false
  })
  create!: ActivityTypeCreateWithoutMigrated_fromInput;
}
