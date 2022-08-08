import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserActivityOrderByWithAggregationInput } from "../../../inputs/UserActivityOrderByWithAggregationInput";
import { UserActivityScalarWhereWithAggregatesInput } from "../../../inputs/UserActivityScalarWhereWithAggregatesInput";
import { UserActivityWhereInput } from "../../../inputs/UserActivityWhereInput";
import { UserActivityScalarFieldEnum } from "../../../../enums/UserActivityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserActivityArgs {
  @TypeGraphQL.Field(_type => UserActivityWhereInput, {
    nullable: true
  })
  where?: UserActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserActivityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserActivityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "user_id" | "activity_type_id">;

  @TypeGraphQL.Field(_type => UserActivityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserActivityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
