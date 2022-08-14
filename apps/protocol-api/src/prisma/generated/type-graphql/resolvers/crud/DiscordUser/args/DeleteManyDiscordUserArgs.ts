import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscordUserWhereInput } from "../../../inputs/DiscordUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  where?: DiscordUserWhereInput | undefined;
}
