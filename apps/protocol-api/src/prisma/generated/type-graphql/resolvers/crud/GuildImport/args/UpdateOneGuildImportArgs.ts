import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportUpdateInput } from "../../../inputs/GuildImportUpdateInput";
import { GuildImportWhereUniqueInput } from "../../../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuildImportArgs {
  @TypeGraphQL.Field(_type => GuildImportUpdateInput, {
    nullable: false
  })
  data!: GuildImportUpdateInput;

  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;
}
