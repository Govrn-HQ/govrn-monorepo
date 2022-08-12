import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobRunOrderByWithAggregationInput } from "../../../inputs/JobRunOrderByWithAggregationInput";
import { JobRunScalarWhereWithAggregatesInput } from "../../../inputs/JobRunScalarWhereWithAggregatesInput";
import { JobRunWhereInput } from "../../../inputs/JobRunWhereInput";
import { JobRunScalarFieldEnum } from "../../../../enums/JobRunScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJobRunArgs {
  @TypeGraphQL.Field(_type => JobRunWhereInput, {
    nullable: true
  })
  where?: JobRunWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobRunOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: JobRunOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobRunScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "completedDate" | "startDate" | "name">;

  @TypeGraphQL.Field(_type => JobRunScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: JobRunScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
