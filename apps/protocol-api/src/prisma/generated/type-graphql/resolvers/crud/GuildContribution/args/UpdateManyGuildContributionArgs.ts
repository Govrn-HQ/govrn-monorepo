import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionUpdateManyMutationInput } from "../../../inputs/GuildContributionUpdateManyMutationInput";
import { GuildContributionWhereInput } from "../../../inputs/GuildContributionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildContributionArgs {
  @TypeGraphQL.Field(_type => GuildContributionUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildContributionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildContributionWhereInput, {
    nullable: true
  })
  where?: GuildContributionWhereInput | undefined;
}
