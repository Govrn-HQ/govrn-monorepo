import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTwitter_usersInput } from "../inputs/UserCreateOrConnectWithoutTwitter_usersInput";
import { UserCreateWithoutTwitter_usersInput } from "../inputs/UserCreateWithoutTwitter_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTwitter_usersInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutTwitter_usersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTwitter_usersInput, {
    nullable: true
  })
  create?: UserCreateWithoutTwitter_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTwitter_usersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTwitter_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
