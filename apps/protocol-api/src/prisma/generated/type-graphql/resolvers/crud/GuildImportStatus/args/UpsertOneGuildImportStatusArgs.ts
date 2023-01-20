import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusCreateInput } from "../../../inputs/GuildImportStatusCreateInput";
import { GuildImportStatusUpdateInput } from "../../../inputs/GuildImportStatusUpdateInput";
import { GuildImportStatusWhereUniqueInput } from "../../../inputs/GuildImportStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => GuildImportStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportStatusCreateInput, {
    nullable: false
  })
  create!: GuildImportStatusCreateInput;

  @TypeGraphQL.Field(_type => GuildImportStatusUpdateInput, {
    nullable: false
  })
  update!: GuildImportStatusUpdateInput;
}
