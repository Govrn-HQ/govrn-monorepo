import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationWhereUniqueInput } from "../../../inputs/GuildTwitterIntegrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: GuildTwitterIntegrationWhereUniqueInput;
}
