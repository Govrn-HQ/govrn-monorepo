import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryActivityOrderByWithAggregationInput } from "../../../inputs/CategoryActivityOrderByWithAggregationInput";
import { CategoryActivityScalarWhereWithAggregatesInput } from "../../../inputs/CategoryActivityScalarWhereWithAggregatesInput";
import { CategoryActivityWhereInput } from "../../../inputs/CategoryActivityWhereInput";
import { CategoryActivityScalarFieldEnum } from "../../../../enums/CategoryActivityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityWhereInput, {
    nullable: true
  })
  where?: CategoryActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CategoryActivityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @TypeGraphQL.Field(_type => CategoryActivityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CategoryActivityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
