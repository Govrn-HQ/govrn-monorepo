import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainOrderByWithAggregationInput } from "../../../inputs/ChainOrderByWithAggregationInput";
import { ChainScalarWhereWithAggregatesInput } from "../../../inputs/ChainScalarWhereWithAggregatesInput";
import { ChainWhereInput } from "../../../inputs/ChainWhereInput";
import { ChainScalarFieldEnum } from "../../../../enums/ChainScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChainArgs {
  @TypeGraphQL.Field(_type => ChainWhereInput, {
    nullable: true
  })
  where?: ChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChainOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChainOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "chain_id">;

  @TypeGraphQL.Field(_type => ChainScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChainScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
