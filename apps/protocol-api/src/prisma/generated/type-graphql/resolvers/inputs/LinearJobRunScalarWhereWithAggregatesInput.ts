import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("LinearJobRunScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LinearJobRunScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LinearJobRunScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LinearJobRunScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearJobRunScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LinearJobRunScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearJobRunScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LinearJobRunScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  completedDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  startDate?: DateTimeWithAggregatesFilter | undefined;
}
