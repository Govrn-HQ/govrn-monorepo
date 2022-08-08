import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutContributionsInput } from "../inputs/UserCreateOrConnectWithoutContributionsInput";
import { UserCreateWithoutContributionsInput } from "../inputs/UserCreateWithoutContributionsInput";
import { UserUpdateWithoutContributionsInput } from "../inputs/UserUpdateWithoutContributionsInput";
import { UserUpsertWithoutContributionsInput } from "../inputs/UserUpsertWithoutContributionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutContributionsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutContributionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutContributionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutContributionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutContributionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutContributionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutContributionsInput | undefined;
}
