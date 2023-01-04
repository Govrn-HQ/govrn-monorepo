import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutGuild_usersInput } from "../inputs/UserCreateOrConnectWithoutGuild_usersInput";
import { UserCreateWithoutGuild_usersInput } from "../inputs/UserCreateWithoutGuild_usersInput";
import { UserUpdateWithoutGuild_usersInput } from "../inputs/UserUpdateWithoutGuild_usersInput";
import { UserUpsertWithoutGuild_usersInput } from "../inputs/UserUpsertWithoutGuild_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutGuild_usersNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutGuild_usersNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutGuild_usersInput, {
    nullable: true
  })
  create?: UserCreateWithoutGuild_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutGuild_usersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutGuild_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutGuild_usersInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutGuild_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutGuild_usersInput, {
    nullable: true
  })
  update?: UserUpdateWithoutGuild_usersInput | undefined;
}
