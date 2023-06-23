import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SplitContractRelationFilter } from "../inputs/SplitContractRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SplitPaymentWhereInput", {
  isAbstract: true
})
export class SplitPaymentWhereInput {
  @TypeGraphQL.Field(_type => [SplitPaymentWhereInput], {
    nullable: true
  })
  AND?: SplitPaymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereInput], {
    nullable: true
  })
  OR?: SplitPaymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereInput], {
    nullable: true
  })
  NOT?: SplitPaymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token_address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  amount?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tx_hash?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sender_address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  recipient_address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  sender_user_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  sender_user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  split_contract_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SplitContractRelationFilter, {
    nullable: true
  })
  split_contract?: SplitContractRelationFilter | undefined;
}
