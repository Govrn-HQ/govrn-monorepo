import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSent_split_paymentsInput } from "../inputs/UserCreateWithoutSent_split_paymentsInput";
import { UserUpdateWithoutSent_split_paymentsInput } from "../inputs/UserUpdateWithoutSent_split_paymentsInput";

@TypeGraphQL.InputType("UserUpsertWithoutSent_split_paymentsInput", {
  isAbstract: true
})
export class UserUpsertWithoutSent_split_paymentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSent_split_paymentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSent_split_paymentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSent_split_paymentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSent_split_paymentsInput;
}
