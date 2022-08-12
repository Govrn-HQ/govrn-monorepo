import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateNestedOneWithoutUsersInput } from "../inputs/ActivityTypeCreateNestedOneWithoutUsersInput";
import { UserCreateNestedOneWithoutActivitiesInput } from "../inputs/UserCreateNestedOneWithoutActivitiesInput";

@TypeGraphQL.InputType("UserActivityCreateInput", {
  isAbstract: true
})
export class UserActivityCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActivitiesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutActivitiesInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  activity_type!: ActivityTypeCreateNestedOneWithoutUsersInput;
}
