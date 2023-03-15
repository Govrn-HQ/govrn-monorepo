import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusUpdateManyMutationInput } from "../../../inputs/GuildContributionVerificationStatusUpdateManyMutationInput";
import { GuildContributionVerificationStatusWhereInput } from "../../../inputs/GuildContributionVerificationStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildContributionVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildContributionVerificationStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereInput, {
    nullable: true
  })
  where?: GuildContributionVerificationStatusWhereInput | undefined;
}
