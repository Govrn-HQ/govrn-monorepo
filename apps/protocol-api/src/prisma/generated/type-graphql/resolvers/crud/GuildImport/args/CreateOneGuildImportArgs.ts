import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportCreateInput } from "../../../inputs/GuildImportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuildImportArgs {
  @TypeGraphQL.Field(_type => GuildImportCreateInput, {
    nullable: false
  })
  data!: GuildImportCreateInput;
}
