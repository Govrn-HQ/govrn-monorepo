import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportCreateInput } from "../../../inputs/GuildImportCreateInput";
import { GuildImportUpdateInput } from "../../../inputs/GuildImportUpdateInput";
import { GuildImportWhereUniqueInput } from "../../../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGuildImportArgs {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportCreateInput, {
    nullable: false
  })
  create!: GuildImportCreateInput;

  @TypeGraphQL.Field(_type => GuildImportUpdateInput, {
    nullable: false
  })
  update!: GuildImportUpdateInput;
}
