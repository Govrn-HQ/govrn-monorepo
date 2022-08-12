import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutGuild_usersInput } from "../inputs/UserCreateWithoutGuild_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutGuild_usersInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutGuild_usersInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutGuild_usersInput, {
    nullable: false
  })
  create!: UserCreateWithoutGuild_usersInput;
}
