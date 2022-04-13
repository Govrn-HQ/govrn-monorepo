import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainTypeOrderByWithAggregationInput } from "../../../inputs/ChainTypeOrderByWithAggregationInput";
import { ChainTypeScalarWhereWithAggregatesInput } from "../../../inputs/ChainTypeScalarWhereWithAggregatesInput";
import { ChainTypeWhereInput } from "../../../inputs/ChainTypeWhereInput";
import { ChainTypeScalarFieldEnum } from "../../../../enums/ChainTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChainTypeArgs {
  @TypeGraphQL.Field(_type => ChainTypeWhereInput, {
    nullable: true
  })
  where?: ChainTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChainTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChainTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => ChainTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChainTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
