import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportCreateManyInput } from "../../../inputs/GuildImportCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGuildImportArgs {
  @TypeGraphQL.Field(_type => [GuildImportCreateManyInput], {
    nullable: false
  })
  data!: GuildImportCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
