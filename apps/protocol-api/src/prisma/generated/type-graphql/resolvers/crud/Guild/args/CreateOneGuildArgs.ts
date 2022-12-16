import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildCreateInput } from "../../../inputs/GuildCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuildArgs {
  @TypeGraphQL.Field(_type => GuildCreateInput, {
    nullable: false
  })
  data!: GuildCreateInput;
}
