import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusCreateInput } from "../../../inputs/GuildImportStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => GuildImportStatusCreateInput, {
    nullable: false
  })
  data!: GuildImportStatusCreateInput;
}
