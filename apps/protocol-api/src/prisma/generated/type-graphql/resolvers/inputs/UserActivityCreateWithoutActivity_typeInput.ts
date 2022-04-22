import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutActivitiesInput } from "../inputs/UserCreateNestedOneWithoutActivitiesInput";

@TypeGraphQL.InputType("UserActivityCreateWithoutActivity_typeInput", {
  isAbstract: true
})
export class UserActivityCreateWithoutActivity_typeInput {
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
}
