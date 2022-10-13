import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ChainScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ChainScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  chain_id?: StringWithAggregatesFilter | undefined;
}
