import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionUpdateInput } from "../../../inputs/GuildContributionUpdateInput";
import { GuildContributionWhereUniqueInput } from "../../../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuildContributionArgs {
  @TypeGraphQL.Field(_type => GuildContributionUpdateInput, {
    nullable: false
  })
  data!: GuildContributionUpdateInput;

  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionWhereUniqueInput;
}
