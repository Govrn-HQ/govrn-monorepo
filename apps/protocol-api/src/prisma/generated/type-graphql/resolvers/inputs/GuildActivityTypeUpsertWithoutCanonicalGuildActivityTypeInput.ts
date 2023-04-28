import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput";
import { GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput";

@TypeGraphQL.InputType("GuildActivityTypeUpsertWithoutCanonicalGuildActivityTypeInput", {
  isAbstract: true
})
export class GuildActivityTypeUpsertWithoutCanonicalGuildActivityTypeInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput, {
    nullable: false
  })
  update!: GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput, {
    nullable: false
  })
  create!: GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput;
}
