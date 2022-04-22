import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeScalarWhereInput } from "../inputs/ActivityTypeScalarWhereInput";
import { ActivityTypeUpdateManyMutationInput } from "../inputs/ActivityTypeUpdateManyMutationInput";

@TypeGraphQL.InputType("ActivityTypeUpdateManyWithWhereWithoutCategory_activityInput", {
  isAbstract: true
})
export class ActivityTypeUpdateManyWithWhereWithoutCategory_activityInput {
  @TypeGraphQL.Field(_type => ActivityTypeScalarWhereInput, {
    nullable: false
  })
  where!: ActivityTypeScalarWhereInput;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActivityTypeUpdateManyMutationInput;
}
