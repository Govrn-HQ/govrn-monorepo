import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput";
import { GuildContributionVerificationStatusWhereUniqueInput } from "../inputs/GuildContributionVerificationStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput", {
  isAbstract: true
})
export class GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionVerificationStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput, {
    nullable: false
  })
  create!: GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput;
}
