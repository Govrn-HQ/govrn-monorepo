import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportWhereUniqueInput } from "../../../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGuildImportArgs {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;
}
