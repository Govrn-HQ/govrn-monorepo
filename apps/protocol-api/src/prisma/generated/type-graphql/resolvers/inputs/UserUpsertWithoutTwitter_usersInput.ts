import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTwitter_usersInput } from "../inputs/UserCreateWithoutTwitter_usersInput";
import { UserUpdateWithoutTwitter_usersInput } from "../inputs/UserUpdateWithoutTwitter_usersInput";

@TypeGraphQL.InputType("UserUpsertWithoutTwitter_usersInput", {
  isAbstract: true
})
export class UserUpsertWithoutTwitter_usersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTwitter_usersInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTwitter_usersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTwitter_usersInput, {
    nullable: false
  })
  create!: UserCreateWithoutTwitter_usersInput;
}
