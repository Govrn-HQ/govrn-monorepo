import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractOrderByWithRelationInput } from "../../../inputs/SplitContractOrderByWithRelationInput";
import { SplitContractWhereInput } from "../../../inputs/SplitContractWhereInput";
import { SplitContractWhereUniqueInput } from "../../../inputs/SplitContractWhereUniqueInput";
import { SplitContractScalarFieldEnum } from "../../../../enums/SplitContractScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ChainSplit_contractsArgs {
  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  where?: SplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SplitContractOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SplitContractOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: true
  })
  cursor?: SplitContractWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SplitContractScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "chain_id" | "address" | "tx_hash" | "enabled" | "user_split_contract_id"> | undefined;
}
