import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusUpdateInput } from "../../../inputs/GuildImportStatusUpdateInput";
import { GuildImportStatusWhereUniqueInput } from "../../../inputs/GuildImportStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => GuildImportStatusUpdateInput, {
    nullable: false
  })
  data!: GuildImportStatusUpdateInput;

  @TypeGraphQL.Field(_type => GuildImportStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportStatusWhereUniqueInput;
}
