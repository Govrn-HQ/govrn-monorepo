import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractOrderByWithAggregationInput } from "../../../inputs/UserSplitContractOrderByWithAggregationInput";
import { UserSplitContractScalarWhereWithAggregatesInput } from "../../../inputs/UserSplitContractScalarWhereWithAggregatesInput";
import { UserSplitContractWhereInput } from "../../../inputs/UserSplitContractWhereInput";
import { UserSplitContractScalarFieldEnum } from "../../../../enums/UserSplitContractScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserSplitContractArgs {
  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  where?: UserSplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserSplitContractOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "user_id" | "enabled">;

  @TypeGraphQL.Field(_type => UserSplitContractScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserSplitContractScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
