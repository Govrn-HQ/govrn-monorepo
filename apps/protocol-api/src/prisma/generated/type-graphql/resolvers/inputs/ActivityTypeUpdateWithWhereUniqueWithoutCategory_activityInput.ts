import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateWithoutCategory_activityInput } from "../inputs/ActivityTypeUpdateWithoutCategory_activityInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("ActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput", {
  isAbstract: true
})
export class ActivityTypeUpdateWithWhereUniqueWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutCategory_activityInput, {
    nullable: false
  })
  data!: ActivityTypeUpdateWithoutCategory_activityInput;
}
