import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("GuildUserScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuildUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuildUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuildUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuildUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuildUserScalarWhereWithAggregatesInput[] | undefined;

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
  user_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  guild_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  membership_status_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  favorite?: BoolWithAggregatesFilter | undefined;
}
