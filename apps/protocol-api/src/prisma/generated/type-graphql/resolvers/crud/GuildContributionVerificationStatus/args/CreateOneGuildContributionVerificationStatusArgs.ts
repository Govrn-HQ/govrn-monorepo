import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusCreateInput } from "../../../inputs/GuildContributionVerificationStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuildContributionVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCreateInput, {
    nullable: false
  })
  data!: GuildContributionVerificationStatusCreateInput;
}
