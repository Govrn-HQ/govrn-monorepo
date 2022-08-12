import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("JobRunScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class JobRunScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [JobRunScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: JobRunScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobRunScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: JobRunScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobRunScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: JobRunScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
