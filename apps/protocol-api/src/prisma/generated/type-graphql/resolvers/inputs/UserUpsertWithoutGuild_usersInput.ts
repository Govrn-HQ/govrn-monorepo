import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutGuild_usersInput } from "../inputs/UserCreateWithoutGuild_usersInput";
import { UserUpdateWithoutGuild_usersInput } from "../inputs/UserUpdateWithoutGuild_usersInput";

@TypeGraphQL.InputType("UserUpsertWithoutGuild_usersInput", {
  isAbstract: true
})
export class UserUpsertWithoutGuild_usersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutGuild_usersInput, {
    nullable: false
  })
  update!: UserUpdateWithoutGuild_usersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutGuild_usersInput, {
    nullable: false
  })
  create!: UserCreateWithoutGuild_usersInput;
}
