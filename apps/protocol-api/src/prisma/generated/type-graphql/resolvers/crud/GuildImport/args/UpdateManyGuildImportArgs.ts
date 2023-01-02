import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportUpdateManyMutationInput } from "../../../inputs/GuildImportUpdateManyMutationInput";
import { GuildImportWhereInput } from "../../../inputs/GuildImportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildImportArgs {
  @TypeGraphQL.Field(_type => GuildImportUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildImportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  where?: GuildImportWhereInput | undefined;
}
