import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusOrderByWithRelationInput } from "../inputs/GuildImportStatusOrderByWithRelationInput";
import { GuildOrderByWithRelationInput } from "../inputs/GuildOrderByWithRelationInput";
import { GuildUserOrderByRelationAggregateInput } from "../inputs/GuildUserOrderByRelationAggregateInput";
import { IntegrationTypeOrderByWithRelationInput } from "../inputs/IntegrationTypeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildImportOrderByWithRelationInput", {
  isAbstract: true
})
export class GuildImportOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authentication_token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guild_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildOrderByWithRelationInput, {
    nullable: true
  })
  guild?: GuildOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integration_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeOrderByWithRelationInput, {
    nullable: true
  })
  integration_type?: IntegrationTypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  import_status_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusOrderByWithRelationInput, {
    nullable: true
  })
  import_status?: GuildImportStatusOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: GuildUserOrderByRelationAggregateInput | undefined;
}
