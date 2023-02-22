import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildUserOrderByWithAggregationInput } from "../../../inputs/GuildUserOrderByWithAggregationInput";
import { GuildUserScalarWhereWithAggregatesInput } from "../../../inputs/GuildUserScalarWhereWithAggregatesInput";
import { GuildUserWhereInput } from "../../../inputs/GuildUserWhereInput";
import { GuildUserScalarFieldEnum } from "../../../../enums/GuildUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildUserArgs {
  @TypeGraphQL.Field(_type => GuildUserWhereInput, {
    nullable: true
  })
  where?: GuildUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "user_id" | "guild_id" | "membership_status_id" | "favorite" | "guild_import_id">;

  @TypeGraphQL.Field(_type => GuildUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
