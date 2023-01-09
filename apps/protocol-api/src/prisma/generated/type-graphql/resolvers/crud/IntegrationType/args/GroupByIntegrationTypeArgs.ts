import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeOrderByWithAggregationInput } from "../../../inputs/IntegrationTypeOrderByWithAggregationInput";
import { IntegrationTypeScalarWhereWithAggregatesInput } from "../../../inputs/IntegrationTypeScalarWhereWithAggregatesInput";
import { IntegrationTypeWhereInput } from "../../../inputs/IntegrationTypeWhereInput";
import { IntegrationTypeScalarFieldEnum } from "../../../../enums/IntegrationTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIntegrationTypeArgs {
  @TypeGraphQL.Field(_type => IntegrationTypeWhereInput, {
    nullable: true
  })
  where?: IntegrationTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IntegrationTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => IntegrationTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IntegrationTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
