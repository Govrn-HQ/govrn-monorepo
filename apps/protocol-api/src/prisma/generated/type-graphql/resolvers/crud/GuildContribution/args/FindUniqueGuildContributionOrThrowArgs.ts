import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionWhereUniqueInput } from "../../../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGuildContributionOrThrowArgs {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionWhereUniqueInput;
}
