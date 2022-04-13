import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutActivitiesInput } from "../inputs/UserCreateWithoutActivitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutActivitiesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutActivitiesInput, {
    nullable: false
  })
  create!: UserCreateWithoutActivitiesInput;
}
