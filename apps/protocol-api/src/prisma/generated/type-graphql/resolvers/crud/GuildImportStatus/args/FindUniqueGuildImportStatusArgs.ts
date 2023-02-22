import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusWhereUniqueInput } from "../../../inputs/GuildImportStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => GuildImportStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportStatusWhereUniqueInput;
}
