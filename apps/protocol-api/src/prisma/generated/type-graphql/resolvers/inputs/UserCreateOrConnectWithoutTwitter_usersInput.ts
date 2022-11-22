import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTwitter_usersInput } from "../inputs/UserCreateWithoutTwitter_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutTwitter_usersInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutTwitter_usersInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTwitter_usersInput, {
    nullable: false
  })
  create!: UserCreateWithoutTwitter_usersInput;
}
