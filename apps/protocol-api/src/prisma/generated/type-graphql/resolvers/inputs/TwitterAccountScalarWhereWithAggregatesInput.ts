import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TwitterAccountScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TwitterAccountScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TwitterAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TwitterAccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TwitterAccountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TwitterAccountScalarWhereWithAggregatesInput[] | undefined;

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
  account_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  guild_id?: IntNullableWithAggregatesFilter | undefined;
}
