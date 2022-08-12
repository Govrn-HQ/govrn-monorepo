import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionCreateInput } from "../../../inputs/GuildContributionCreateInput";
import { GuildContributionUpdateInput } from "../../../inputs/GuildContributionUpdateInput";
import { GuildContributionWhereUniqueInput } from "../../../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGuildContributionArgs {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionCreateInput, {
    nullable: false
  })
  create!: GuildContributionCreateInput;

  @TypeGraphQL.Field(_type => GuildContributionUpdateInput, {
    nullable: false
  })
  update!: GuildContributionUpdateInput;
}
