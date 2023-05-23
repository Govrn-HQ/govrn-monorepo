import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildRelationFilter } from "../inputs/GuildRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuildTwitterIntegrationWhereInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationWhereInput {
  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationWhereInput], {
    nullable: true
  })
  AND?: GuildTwitterIntegrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationWhereInput], {
    nullable: true
  })
  OR?: GuildTwitterIntegrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationWhereInput], {
    nullable: true
  })
  NOT?: GuildTwitterIntegrationWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true
  })
  guild?: GuildRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  hashtag?: StringFilter | undefined;
}
