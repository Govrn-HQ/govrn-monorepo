import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationCreateInput } from "../../../inputs/GuildTwitterIntegrationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateInput, {
    nullable: false
  })
  data!: GuildTwitterIntegrationCreateInput;
}
