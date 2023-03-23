import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput";
import { GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput";
import { GuildContributionVerificationStatusUpdateWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusUpdateWithoutGuild_contributionsInput";
import { GuildContributionVerificationStatusUpsertWithoutGuild_contributionsInput } from "../inputs/GuildContributionVerificationStatusUpsertWithoutGuild_contributionsInput";
import { GuildContributionVerificationStatusWhereUniqueInput } from "../inputs/GuildContributionVerificationStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionVerificationStatusUpdateOneWithoutGuild_contributionsNestedInput", {
  isAbstract: true
})
export class GuildContributionVerificationStatusUpdateOneWithoutGuild_contributionsNestedInput {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput, {
    nullable: true
  })
  create?: GuildContributionVerificationStatusCreateWithoutGuild_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput, {
    nullable: true
  })
  connectOrCreate?: GuildContributionVerificationStatusCreateOrConnectWithoutGuild_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusUpsertWithoutGuild_contributionsInput, {
    nullable: true
  })
  upsert?: GuildContributionVerificationStatusUpsertWithoutGuild_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildContributionVerificationStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusUpdateWithoutGuild_contributionsInput, {
    nullable: true
  })
  update?: GuildContributionVerificationStatusUpdateWithoutGuild_contributionsInput | undefined;
}
