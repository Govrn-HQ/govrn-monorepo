import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutGuildsInput } from "../inputs/ContributionCreateNestedOneWithoutGuildsInput";
import { GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput";

@TypeGraphQL.InputType("GuildContributionCreateWithoutGuildInput", {
  isAbstract: true
})
export class GuildContributionCreateWithoutGuildInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutGuildsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutGuildsInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attestation_threshold?: number | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput, {
    nullable: true
  })
  verificationStatus?: GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput | undefined;
}
