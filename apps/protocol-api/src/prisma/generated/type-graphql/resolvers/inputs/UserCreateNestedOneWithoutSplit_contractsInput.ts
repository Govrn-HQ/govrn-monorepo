import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSplit_contractsInput } from "../inputs/UserCreateOrConnectWithoutSplit_contractsInput";
import { UserCreateWithoutSplit_contractsInput } from "../inputs/UserCreateWithoutSplit_contractsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSplit_contractsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSplit_contractsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSplit_contractsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSplit_contractsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSplit_contractsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
