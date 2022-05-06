import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActivityTypeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ActivityTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ActivityTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ActivityTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ActivityTypeScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  active?: BoolWithAggregatesFilter | undefined;
}
