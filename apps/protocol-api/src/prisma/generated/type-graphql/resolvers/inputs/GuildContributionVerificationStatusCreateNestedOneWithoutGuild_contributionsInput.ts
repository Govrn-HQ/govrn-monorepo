import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput";
import { GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput";
import { GuildContributionVerificationStatusWhereUniqueInput } from "../inputs/GuildContributionVerificationStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput", {
  isAbstract: true
})
export class GuildContributionVerificationStatusCreateNestedOneWithoutGuild_contributionsInput {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput, {
    nullable: true
  })
  create?: GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput, {
    nullable: true
  })
  connectOrCreate?: GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildContributionVerificationStatusWhereUniqueInput | undefined;
}
