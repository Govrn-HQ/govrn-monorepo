import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDiscord_usersInput } from "../inputs/UserCreateOrConnectWithoutDiscord_usersInput";
import { UserCreateWithoutDiscord_usersInput } from "../inputs/UserCreateWithoutDiscord_usersInput";
import { UserUpdateWithoutDiscord_usersInput } from "../inputs/UserUpdateWithoutDiscord_usersInput";
import { UserUpsertWithoutDiscord_usersInput } from "../inputs/UserUpsertWithoutDiscord_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutDiscord_usersNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutDiscord_usersNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDiscord_usersInput, {
    nullable: true
  })
  create?: UserCreateWithoutDiscord_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDiscord_usersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDiscord_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutDiscord_usersInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutDiscord_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutDiscord_usersInput, {
    nullable: true
  })
  update?: UserUpdateWithoutDiscord_usersInput | undefined;
}
