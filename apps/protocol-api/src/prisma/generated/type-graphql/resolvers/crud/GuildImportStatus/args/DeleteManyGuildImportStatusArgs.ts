import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusWhereInput } from "../../../inputs/GuildImportStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => GuildImportStatusWhereInput, {
    nullable: true
  })
  where?: GuildImportStatusWhereInput | undefined;
}
