import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTwitter_userInput } from "../inputs/UserCreateOrConnectWithoutTwitter_userInput";
import { UserCreateWithoutTwitter_userInput } from "../inputs/UserCreateWithoutTwitter_userInput";
import { UserUpdateWithoutTwitter_userInput } from "../inputs/UserUpdateWithoutTwitter_userInput";
import { UserUpsertWithoutTwitter_userInput } from "../inputs/UserUpsertWithoutTwitter_userInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutTwitter_userNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutTwitter_userNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTwitter_userInput, {
    nullable: true
  })
  create?: UserCreateWithoutTwitter_userInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTwitter_userInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTwitter_userInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTwitter_userInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTwitter_userInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutTwitter_userInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTwitter_userInput | undefined;
}
