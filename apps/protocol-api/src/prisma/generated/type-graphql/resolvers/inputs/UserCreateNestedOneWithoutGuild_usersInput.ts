import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutGuild_usersInput } from "../inputs/UserCreateOrConnectWithoutGuild_usersInput";
import { UserCreateWithoutGuild_usersInput } from "../inputs/UserCreateWithoutGuild_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutGuild_usersInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutGuild_usersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutGuild_usersInput, {
    nullable: true
  })
  create?: UserCreateWithoutGuild_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutGuild_usersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutGuild_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
