import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateNestedManyWithoutGuildInput } from "../inputs/GuildContributionCreateNestedManyWithoutGuildInput";
import { GuildUserCreateNestedManyWithoutGuildInput } from "../inputs/GuildUserCreateNestedManyWithoutGuildInput";

@TypeGraphQL.InputType("GuildCreateWithoutTwitter_accountInput", {
  isAbstract: true
})
export class GuildCreateWithoutTwitter_accountInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discord_id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  congrats_channel?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo?: string | undefined;

  @TypeGraphQL.Field(_type => GuildContributionCreateNestedManyWithoutGuildInput, {
    nullable: true
  })
  contributions?: GuildContributionCreateNestedManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateNestedManyWithoutGuildInput, {
    nullable: true
  })
  users?: GuildUserCreateNestedManyWithoutGuildInput | undefined;
}
