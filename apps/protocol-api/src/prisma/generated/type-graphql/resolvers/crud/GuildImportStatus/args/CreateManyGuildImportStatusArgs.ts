import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusCreateManyInput } from "../../../inputs/GuildImportStatusCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => [GuildImportStatusCreateManyInput], {
    nullable: false
  })
  data!: GuildImportStatusCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
