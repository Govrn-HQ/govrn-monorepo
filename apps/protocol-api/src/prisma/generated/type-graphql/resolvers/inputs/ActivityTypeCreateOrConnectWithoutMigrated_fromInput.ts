import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateWithoutMigrated_fromInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeCreateOrConnectWithoutMigrated_fromInput", {
  isAbstract: true
})
export class ActivityTypeCreateOrConnectWithoutMigrated_fromInput {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutMigrated_fromInput, {
    nullable: false
  })
  create!: ActivityTypeCreateWithoutMigrated_fromInput;
}
