import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LinearCycleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LinearCycleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LinearCycleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LinearCycleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearCycleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LinearCycleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearCycleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LinearCycleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  number?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  startsAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  endsAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  linear_id?: StringWithAggregatesFilter | undefined;
}
