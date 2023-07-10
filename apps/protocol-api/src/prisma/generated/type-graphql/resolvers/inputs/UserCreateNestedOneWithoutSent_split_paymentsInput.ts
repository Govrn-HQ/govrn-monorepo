import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSent_split_paymentsInput } from "../inputs/UserCreateOrConnectWithoutSent_split_paymentsInput";
import { UserCreateWithoutSent_split_paymentsInput } from "../inputs/UserCreateWithoutSent_split_paymentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSent_split_paymentsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSent_split_paymentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSent_split_paymentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSent_split_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSent_split_paymentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSent_split_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
