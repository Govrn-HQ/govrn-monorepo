import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusCreateManyInput } from "../../../inputs/GuildContributionVerificationStatusCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGuildContributionVerificationStatusArgs {
  @TypeGraphQL.Field(_type => [GuildContributionVerificationStatusCreateManyInput], {
    nullable: false
  })
  data!: GuildContributionVerificationStatusCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
