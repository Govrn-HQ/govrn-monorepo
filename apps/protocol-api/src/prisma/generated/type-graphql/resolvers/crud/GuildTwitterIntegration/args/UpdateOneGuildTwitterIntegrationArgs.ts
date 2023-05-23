import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationUpdateInput } from "../../../inputs/GuildTwitterIntegrationUpdateInput";
import { GuildTwitterIntegrationWhereUniqueInput } from "../../../inputs/GuildTwitterIntegrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationUpdateInput, {
    nullable: false
  })
  data!: GuildTwitterIntegrationUpdateInput;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: GuildTwitterIntegrationWhereUniqueInput;
}
