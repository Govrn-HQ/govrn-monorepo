import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildActivityTypeRelationFilter } from "../inputs/GuildActivityTypeRelationFilter";
import { GuildRelationFilter } from "../inputs/GuildRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeWhereInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeWhereInput {
  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeWhereInput], {
    nullable: true
  })
  AND?: CanonicalGuildActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeWhereInput], {
    nullable: true
  })
  OR?: CanonicalGuildActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeWhereInput], {
    nullable: true
  })
  NOT?: CanonicalGuildActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true
  })
  guild?: GuildRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_activity_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeRelationFilter, {
    nullable: true
  })
  guild_activity_type?: GuildActivityTypeRelationFilter | undefined;
}
