import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDiscord_usersInput } from "../inputs/UserCreateWithoutDiscord_usersInput";
import { UserUpdateWithoutDiscord_usersInput } from "../inputs/UserUpdateWithoutDiscord_usersInput";

@TypeGraphQL.InputType("UserUpsertWithoutDiscord_usersInput", {
  isAbstract: true
})
export class UserUpsertWithoutDiscord_usersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDiscord_usersInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDiscord_usersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDiscord_usersInput, {
    nullable: false
  })
  create!: UserCreateWithoutDiscord_usersInput;
}
