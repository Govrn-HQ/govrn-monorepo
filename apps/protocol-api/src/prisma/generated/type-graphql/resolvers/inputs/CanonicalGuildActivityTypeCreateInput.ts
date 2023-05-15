import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput";
import { GuildCreateNestedOneWithoutCanonical_guild_activity_typeInput } from "../inputs/GuildCreateNestedOneWithoutCanonical_guild_activity_typeInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeCreateInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutCanonical_guild_activity_typeInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutCanonical_guild_activity_typeInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput, {
    nullable: false
  })
  guild_activity_type!: GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput;
}
