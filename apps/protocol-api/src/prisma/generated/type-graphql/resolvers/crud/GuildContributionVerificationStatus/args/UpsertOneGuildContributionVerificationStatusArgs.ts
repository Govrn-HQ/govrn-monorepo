import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusCreateInput } from "../../../inputs/GuildContributionVerificationStatusCreateInput";
import { GuildContributionVerificationStatusUpdateInput } from "../../../inputs/GuildContributionVerificationStatusUpdateInput";
import { GuildContributionVerificationStatusWhereUniqueInput } from "../../../inputs/GuildContributionVerificationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGuildContributionVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionVerificationStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateInput, {
    nullable: false
  })
  create!: GuildContributionVerificationStatusCreateInput;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusUpdateInput, {
    nullable: false
  })
  update!: GuildContributionVerificationStatusUpdateInput;
}
