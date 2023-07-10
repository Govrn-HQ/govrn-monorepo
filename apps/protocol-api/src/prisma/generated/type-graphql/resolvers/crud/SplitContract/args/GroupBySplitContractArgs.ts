import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractOrderByWithAggregationInput } from "../../../inputs/SplitContractOrderByWithAggregationInput";
import { SplitContractScalarWhereWithAggregatesInput } from "../../../inputs/SplitContractScalarWhereWithAggregatesInput";
import { SplitContractWhereInput } from "../../../inputs/SplitContractWhereInput";
import { SplitContractScalarFieldEnum } from "../../../../enums/SplitContractScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySplitContractArgs {
  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  where?: SplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SplitContractOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SplitContractOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "chain_id" | "address" | "tx_hash" | "enabled" | "user_split_contract_id">;

  @TypeGraphQL.Field(_type => SplitContractScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SplitContractScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
