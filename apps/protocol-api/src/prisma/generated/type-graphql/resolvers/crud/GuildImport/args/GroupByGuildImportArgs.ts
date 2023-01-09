import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportOrderByWithAggregationInput } from "../../../inputs/GuildImportOrderByWithAggregationInput";
import { GuildImportScalarWhereWithAggregatesInput } from "../../../inputs/GuildImportScalarWhereWithAggregatesInput";
import { GuildImportWhereInput } from "../../../inputs/GuildImportWhereInput";
import { GuildImportScalarFieldEnum } from "../../../../enums/GuildImportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildImportArgs {
  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  where?: GuildImportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildImportOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildImportOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "authentication_token" | "guild_id" | "integration_type_id">;

  @TypeGraphQL.Field(_type => GuildImportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildImportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
