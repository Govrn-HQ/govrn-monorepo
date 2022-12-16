import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscordUserCreateInput } from "../../../inputs/DiscordUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserCreateInput, {
    nullable: false
  })
  data!: DiscordUserCreateInput;
}
