import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportOrderByWithRelationInput } from "../../../inputs/GuildImportOrderByWithRelationInput";
import { GuildImportWhereInput } from "../../../inputs/GuildImportWhereInput";
import { GuildImportWhereUniqueInput } from "../../../inputs/GuildImportWhereUniqueInput";
import { GuildImportScalarFieldEnum } from "../../../../enums/GuildImportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class IntegrationTypeGuild_importsArgs {
  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  where?: GuildImportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildImportOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildImportOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildImportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "authentication_token" | "guild_id" | "integration_type_id"> | undefined;
}
