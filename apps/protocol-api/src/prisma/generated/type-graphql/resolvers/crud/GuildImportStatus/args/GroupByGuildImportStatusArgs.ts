import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildImportStatusOrderByWithAggregationInput } from "../../../inputs/GuildImportStatusOrderByWithAggregationInput";
import { GuildImportStatusScalarWhereWithAggregatesInput } from "../../../inputs/GuildImportStatusScalarWhereWithAggregatesInput";
import { GuildImportStatusWhereInput } from "../../../inputs/GuildImportStatusWhereInput";
import { GuildImportStatusScalarFieldEnum } from "../../../../enums/GuildImportStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildImportStatusArgs {
  @TypeGraphQL.Field(_type => GuildImportStatusWhereInput, {
    nullable: true
  })
  where?: GuildImportStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildImportStatusOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildImportStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportStatusScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => GuildImportStatusScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildImportStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
