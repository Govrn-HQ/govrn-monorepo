import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSplit_contractsInput } from "../inputs/UserCreateWithoutSplit_contractsInput";
import { UserUpdateWithoutSplit_contractsInput } from "../inputs/UserUpdateWithoutSplit_contractsInput";

@TypeGraphQL.InputType("UserUpsertWithoutSplit_contractsInput", {
  isAbstract: true
})
export class UserUpsertWithoutSplit_contractsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSplit_contractsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSplit_contractsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSplit_contractsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSplit_contractsInput;
}
