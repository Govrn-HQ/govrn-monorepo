import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSent_split_paymentsInput } from "../inputs/UserCreateWithoutSent_split_paymentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSent_split_paymentsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSent_split_paymentsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSent_split_paymentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSent_split_paymentsInput;
}
