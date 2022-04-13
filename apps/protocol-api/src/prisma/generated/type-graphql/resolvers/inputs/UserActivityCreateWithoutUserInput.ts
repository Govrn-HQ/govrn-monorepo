import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateNestedOneWithoutUsersInput } from "../inputs/ActivityTypeCreateNestedOneWithoutUsersInput";

@TypeGraphQL.InputType("UserActivityCreateWithoutUserInput", {
  isAbstract: true
})
export class UserActivityCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  activity_type!: ActivityTypeCreateNestedOneWithoutUsersInput;
}
