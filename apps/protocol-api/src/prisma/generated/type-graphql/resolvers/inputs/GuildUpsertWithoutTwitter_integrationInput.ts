import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutTwitter_integrationInput } from "../inputs/GuildCreateWithoutTwitter_integrationInput";
import { GuildUpdateWithoutTwitter_integrationInput } from "../inputs/GuildUpdateWithoutTwitter_integrationInput";

@TypeGraphQL.InputType("GuildUpsertWithoutTwitter_integrationInput", {
  isAbstract: true
})
export class GuildUpsertWithoutTwitter_integrationInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutTwitter_integrationInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutTwitter_integrationInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_integrationInput, {
    nullable: false
  })
  create!: GuildCreateWithoutTwitter_integrationInput;
}
