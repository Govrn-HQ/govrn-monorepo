import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutVerificationSettingsInput } from "../inputs/GuildCreateWithoutVerificationSettingsInput";
import { GuildUpdateWithoutVerificationSettingsInput } from "../inputs/GuildUpdateWithoutVerificationSettingsInput";

@TypeGraphQL.InputType("GuildUpsertWithoutVerificationSettingsInput", {
  isAbstract: true
})
export class GuildUpsertWithoutVerificationSettingsInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutVerificationSettingsInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutVerificationSettingsInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutVerificationSettingsInput, {
    nullable: false
  })
  create!: GuildCreateWithoutVerificationSettingsInput;
}
