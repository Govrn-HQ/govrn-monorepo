import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CanonicalGuildActivityTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CanonicalGuildActivityTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CanonicalGuildActivityTypeScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  guild_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  guild_activity_type_id?: IntWithAggregatesFilter | undefined;
}
