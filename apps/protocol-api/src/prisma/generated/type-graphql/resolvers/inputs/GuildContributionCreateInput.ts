import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutGuildsInput } from "../inputs/ContributionCreateNestedOneWithoutGuildsInput";
import { GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput";
import { GuildCreateNestedOneWithoutContributionsInput } from "../inputs/GuildCreateNestedOneWithoutContributionsInput";

@TypeGraphQL.InputType("GuildContributionCreateInput", {
  isAbstract: true
})
export class GuildContributionCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutContributionsInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutContributionsInput;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutGuildsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutGuildsInput;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput, {
    nullable: true
  })
  verificationStatus?: GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput | undefined;
}
