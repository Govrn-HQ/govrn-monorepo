import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateNestedOneWithoutSplit_paymentsInput } from "../inputs/SplitContractCreateNestedOneWithoutSplit_paymentsInput";
import { UserCreateNestedOneWithoutSent_split_paymentsInput } from "../inputs/UserCreateNestedOneWithoutSent_split_paymentsInput";

@TypeGraphQL.InputType("SplitPaymentCreateInput", {
  isAbstract: true
})
export class SplitPaymentCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token_address!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  amount!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tx_hash!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sender_address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  recipient_address!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSent_split_paymentsInput, {
    nullable: true
  })
  sender_user?: UserCreateNestedOneWithoutSent_split_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractCreateNestedOneWithoutSplit_paymentsInput, {
    nullable: false
  })
  split_contract!: SplitContractCreateNestedOneWithoutSplit_paymentsInput;
}
