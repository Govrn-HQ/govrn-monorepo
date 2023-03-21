import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput";
import { GuildContributionVerificationStatusUpdateWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusUpdateWithoutGuild_contributionsInput";

@TypeGraphQL.InputType("GuildContributionVerificationStatusUpsertWithoutGuild_contributionsInput", {
  isAbstract: true
})
export class GuildContributionVerificationStatusUpsertWithoutGuild_contributionsInput {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusUpdateWithoutGuild_contributionsInput, {
    nullable: false
  })
  update!: GuildContributionVerificationStatusUpdateWithoutGuild_contributionsInput;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput, {
    nullable: false
  })
  create!: GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput;
}
