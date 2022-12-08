import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusOrderByWithAggregationInput } from "../../../inputs/GuildMembershipStatusOrderByWithAggregationInput";
import { GuildMembershipStatusScalarWhereWithAggregatesInput } from "../../../inputs/GuildMembershipStatusScalarWhereWithAggregatesInput";
import { GuildMembershipStatusWhereInput } from "../../../inputs/GuildMembershipStatusWhereInput";
import { GuildMembershipStatusScalarFieldEnum } from "../../../../enums/GuildMembershipStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildMembershipStatusArgs {
  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereInput, {
    nullable: true
  })
  where?: GuildMembershipStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildMembershipStatusOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildMembershipStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildMembershipStatusScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => GuildMembershipStatusScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildMembershipStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
