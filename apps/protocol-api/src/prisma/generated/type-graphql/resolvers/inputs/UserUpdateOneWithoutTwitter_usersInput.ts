import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTwitter_usersInput } from "../inputs/UserCreateOrConnectWithoutTwitter_usersInput";
import { UserCreateWithoutTwitter_usersInput } from "../inputs/UserCreateWithoutTwitter_usersInput";
import { UserUpdateWithoutTwitter_usersInput } from "../inputs/UserUpdateWithoutTwitter_usersInput";
import { UserUpsertWithoutTwitter_usersInput } from "../inputs/UserUpsertWithoutTwitter_usersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutTwitter_usersInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutTwitter_usersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTwitter_usersInput, {
    nullable: true
  })
  create?: UserCreateWithoutTwitter_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTwitter_usersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTwitter_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTwitter_usersInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTwitter_usersInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutTwitter_usersInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTwitter_usersInput | undefined;
}
