import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusWhereInput } from "../../../inputs/GuildContributionVerificationStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuildContributionVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereInput, {
    nullable: true
  })
  where?: GuildContributionVerificationStatusWhereInput | undefined;
}
