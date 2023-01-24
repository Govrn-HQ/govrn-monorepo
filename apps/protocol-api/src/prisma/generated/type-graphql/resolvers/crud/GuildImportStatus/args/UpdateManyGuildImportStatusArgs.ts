import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusUpdateManyMutationInput } from "../../../inputs/GuildImportStatusUpdateManyMutationInput";
import { GuildImportStatusWhereInput } from "../../../inputs/GuildImportStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => GuildImportStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildImportStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildImportStatusWhereInput, {
    nullable: true
  })
  where?: GuildImportStatusWhereInput | undefined;
}
