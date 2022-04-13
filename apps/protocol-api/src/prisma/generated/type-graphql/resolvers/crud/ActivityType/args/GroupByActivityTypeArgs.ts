import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityTypeOrderByWithAggregationInput } from "../../../inputs/ActivityTypeOrderByWithAggregationInput";
import { ActivityTypeScalarWhereWithAggregatesInput } from "../../../inputs/ActivityTypeScalarWhereWithAggregatesInput";
import { ActivityTypeWhereInput } from "../../../inputs/ActivityTypeWhereInput";
import { ActivityTypeScalarFieldEnum } from "../../../../enums/ActivityTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActivityTypeArgs {
  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true
  })
  where?: ActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ActivityTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "active" | "category_activity_id">;

  @TypeGraphQL.Field(_type => ActivityTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ActivityTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
