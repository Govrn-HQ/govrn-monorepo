import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CanonicalGuildActivityTypeOrderByWithAggregationInput } from "../../../inputs/CanonicalGuildActivityTypeOrderByWithAggregationInput";
import { CanonicalGuildActivityTypeScalarWhereWithAggregatesInput } from "../../../inputs/CanonicalGuildActivityTypeScalarWhereWithAggregatesInput";
import { CanonicalGuildActivityTypeWhereInput } from "../../../inputs/CanonicalGuildActivityTypeWhereInput";
import { CanonicalGuildActivityTypeScalarFieldEnum } from "../../../../enums/CanonicalGuildActivityTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCanonicalGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  where?: CanonicalGuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CanonicalGuildActivityTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "guild_id" | "guild_activity_type_id">;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CanonicalGuildActivityTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
