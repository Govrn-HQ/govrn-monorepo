import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildVerificationStatusOrderByWithAggregationInput } from "../../../inputs/GuildVerificationStatusOrderByWithAggregationInput";
import { GuildVerificationStatusScalarWhereWithAggregatesInput } from "../../../inputs/GuildVerificationStatusScalarWhereWithAggregatesInput";
import { GuildVerificationStatusWhereInput } from "../../../inputs/GuildVerificationStatusWhereInput";
import { GuildVerificationStatusScalarFieldEnum } from "../../../../enums/GuildVerificationStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuildVerificationStatusArgs {
  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereInput, {
    nullable: true
  })
  where?: GuildVerificationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildVerificationStatusOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuildVerificationStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildVerificationStatusScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => GuildVerificationStatusScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuildVerificationStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
