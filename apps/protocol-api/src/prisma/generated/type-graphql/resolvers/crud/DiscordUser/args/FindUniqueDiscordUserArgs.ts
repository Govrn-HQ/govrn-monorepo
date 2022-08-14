import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscordUserWhereUniqueInput } from "../../../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false
  })
  where!: DiscordUserWhereUniqueInput;
}
