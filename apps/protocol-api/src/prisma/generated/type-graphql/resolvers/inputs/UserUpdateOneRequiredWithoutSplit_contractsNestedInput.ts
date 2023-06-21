import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSplit_contractsInput } from "../inputs/UserCreateOrConnectWithoutSplit_contractsInput";
import { UserCreateWithoutSplit_contractsInput } from "../inputs/UserCreateWithoutSplit_contractsInput";
import { UserUpdateWithoutSplit_contractsInput } from "../inputs/UserUpdateWithoutSplit_contractsInput";
import { UserUpsertWithoutSplit_contractsInput } from "../inputs/UserUpsertWithoutSplit_contractsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSplit_contractsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSplit_contractsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSplit_contractsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSplit_contractsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSplit_contractsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSplit_contractsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSplit_contractsInput | undefined;
}
