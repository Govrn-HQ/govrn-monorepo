import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusWhereUniqueInput } from "../../../inputs/GuildContributionVerificationStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGuildContributionVerificationStatusOrThrowArgs {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionVerificationStatusWhereUniqueInput;
}
