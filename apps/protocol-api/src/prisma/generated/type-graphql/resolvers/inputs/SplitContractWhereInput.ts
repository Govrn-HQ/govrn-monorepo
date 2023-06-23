import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ChainRelationFilter } from "../inputs/ChainRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SplitPaymentListRelationFilter } from "../inputs/SplitPaymentListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserSplitContractRelationFilter } from "../inputs/UserSplitContractRelationFilter";

@TypeGraphQL.InputType("SplitContractWhereInput", {
  isAbstract: true
})
export class SplitContractWhereInput {
  @TypeGraphQL.Field(_type => [SplitContractWhereInput], {
    nullable: true
  })
  AND?: SplitContractWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractWhereInput], {
    nullable: true
  })
  OR?: SplitContractWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractWhereInput], {
    nullable: true
  })
  NOT?: SplitContractWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  chain_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ChainRelationFilter, {
    nullable: true
  })
  chain?: ChainRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tx_hash?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  enabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentListRelationFilter, {
    nullable: true
  })
  split_payments?: SplitPaymentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  user_split_contract_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractRelationFilter, {
    nullable: true
  })
  user_split_contract?: UserSplitContractRelationFilter | undefined;
}
