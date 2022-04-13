import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateWithoutCategory_activityInput } from "../inputs/ActivityTypeCreateWithoutCategory_activityInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeCreateOrConnectWithoutCategory_activityInput", {
  isAbstract: true
})
export class ActivityTypeCreateOrConnectWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutCategory_activityInput, {
    nullable: false
  })
  create!: ActivityTypeCreateWithoutCategory_activityInput;
}
