import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunOrderByWithAggregationInput } from "../../../inputs/LinearJobRunOrderByWithAggregationInput";
import { LinearJobRunScalarWhereWithAggregatesInput } from "../../../inputs/LinearJobRunScalarWhereWithAggregatesInput";
import { LinearJobRunWhereInput } from "../../../inputs/LinearJobRunWhereInput";
import { LinearJobRunScalarFieldEnum } from "../../../../enums/LinearJobRunScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLinearJobRunArgs {
  @TypeGraphQL.Field(_type => LinearJobRunWhereInput, {
    nullable: true
  })
  where?: LinearJobRunWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearJobRunOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LinearJobRunOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearJobRunScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "completedDate" | "startDate">;

  @TypeGraphQL.Field(_type => LinearJobRunScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LinearJobRunScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
