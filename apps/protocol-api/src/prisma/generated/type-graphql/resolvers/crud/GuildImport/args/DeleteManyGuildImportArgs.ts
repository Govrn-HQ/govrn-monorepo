import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportWhereInput } from "../../../inputs/GuildImportWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuildImportArgs {
  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  where?: GuildImportWhereInput | undefined;
}
