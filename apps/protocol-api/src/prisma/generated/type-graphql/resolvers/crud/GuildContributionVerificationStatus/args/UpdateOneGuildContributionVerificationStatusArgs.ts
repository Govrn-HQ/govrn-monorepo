import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusUpdateInput } from "../../../inputs/GuildContributionVerificationStatusUpdateInput";
import { GuildContributionVerificationStatusWhereUniqueInput } from "../../../inputs/GuildContributionVerificationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuildContributionVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusUpdateInput, {
    nullable: false
  })
  data!: GuildContributionVerificationStatusUpdateInput;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionVerificationStatusWhereUniqueInput;
}
