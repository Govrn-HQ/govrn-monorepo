import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutCanonical_guild_activity_typeInput } from "../inputs/GuildCreateWithoutCanonical_guild_activity_typeInput";
import { GuildUpdateWithoutCanonical_guild_activity_typeInput } from "../inputs/GuildUpdateWithoutCanonical_guild_activity_typeInput";

@TypeGraphQL.InputType("GuildUpsertWithoutCanonical_guild_activity_typeInput", {
  isAbstract: true
})
export class GuildUpsertWithoutCanonical_guild_activity_typeInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutCanonical_guild_activity_typeInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutCanonical_guild_activity_typeInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutCanonical_guild_activity_typeInput, {
    nullable: false
  })
  create!: GuildCreateWithoutCanonical_guild_activity_typeInput;
}
