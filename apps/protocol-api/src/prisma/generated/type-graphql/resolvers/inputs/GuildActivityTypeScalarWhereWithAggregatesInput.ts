import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("GuildActivityTypeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuildActivityTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuildActivityTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuildActivityTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuildActivityTypeScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  guild_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  activity_type_id?: IntWithAggregatesFilter | undefined;
}
