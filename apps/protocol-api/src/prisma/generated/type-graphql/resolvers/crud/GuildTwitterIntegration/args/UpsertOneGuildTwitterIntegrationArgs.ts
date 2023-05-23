import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationCreateInput } from "../../../inputs/GuildTwitterIntegrationCreateInput";
import { GuildTwitterIntegrationUpdateInput } from "../../../inputs/GuildTwitterIntegrationUpdateInput";
import { GuildTwitterIntegrationWhereUniqueInput } from "../../../inputs/GuildTwitterIntegrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: GuildTwitterIntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateInput, {
    nullable: false
  })
  create!: GuildTwitterIntegrationCreateInput;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationUpdateInput, {
    nullable: false
  })
  update!: GuildTwitterIntegrationUpdateInput;
}
