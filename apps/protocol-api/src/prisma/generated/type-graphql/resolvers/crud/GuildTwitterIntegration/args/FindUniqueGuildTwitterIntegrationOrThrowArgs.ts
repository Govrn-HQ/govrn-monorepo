import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildTwitterIntegrationWhereUniqueInput } from "../../../inputs/GuildTwitterIntegrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGuildTwitterIntegrationOrThrowArgs {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: GuildTwitterIntegrationWhereUniqueInput;
}
