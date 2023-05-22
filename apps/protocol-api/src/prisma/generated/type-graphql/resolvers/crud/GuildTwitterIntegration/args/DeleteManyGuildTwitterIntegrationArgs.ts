import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationWhereInput } from "../../../inputs/GuildTwitterIntegrationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuildTwitterIntegrationArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereInput, {
    nullable: true
  })
  where?: GuildTwitterIntegrationWhereInput | undefined;
}
