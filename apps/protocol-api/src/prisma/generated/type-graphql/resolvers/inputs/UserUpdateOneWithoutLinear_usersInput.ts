import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLinear_usersInput } from "../inputs/UserCreateOrConnectWithoutLinear_usersInput";
import { UserCreateWithoutLinear_usersInput } from "../inputs/UserCreateWithoutLinear_usersInput";
import { UserUpdateWithoutLinear_usersInput } from "../inputs/UserUpdateWithoutLinear_usersInput";
import { UserUpsertWithoutLinear_usersInput } from "../inputs/UserUpsertWithoutLinear_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutLinear_usersInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutLinear_usersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLinear_usersInput, {
    nullable: true
  })
  create?: UserCreateWithoutLinear_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLinear_usersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLinear_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLinear_usersInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLinear_usersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLinear_usersInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLinear_usersInput | undefined;
}
