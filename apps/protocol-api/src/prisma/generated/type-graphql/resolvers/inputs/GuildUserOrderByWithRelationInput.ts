import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportOrderByWithRelationInput } from "../inputs/GuildImportOrderByWithRelationInput";
import { GuildMembershipStatusOrderByWithRelationInput } from "../inputs/GuildMembershipStatusOrderByWithRelationInput";
import { GuildOrderByWithRelationInput } from "../inputs/GuildOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildUserOrderByWithRelationInput", {
  isAbstract: true
})
export class GuildUserOrderByWithRelationInput {
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
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

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
  membership_status_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusOrderByWithRelationInput, {
    nullable: true
  })
  membershipStatus?: GuildMembershipStatusOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  favorite?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guild_import_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildImportOrderByWithRelationInput, {
    nullable: true
  })
  guild_import?: GuildImportOrderByWithRelationInput | undefined;
}
