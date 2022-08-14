import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobRunOrderByWithRelationInput } from "../../../inputs/JobRunOrderByWithRelationInput";
import { JobRunWhereInput } from "../../../inputs/JobRunWhereInput";
import { JobRunWhereUniqueInput } from "../../../inputs/JobRunWhereUniqueInput";
import { JobRunScalarFieldEnum } from "../../../../enums/JobRunScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyJobRunArgs {
  @TypeGraphQL.Field(_type => JobRunWhereInput, {
    nullable: true
  })
  where?: JobRunWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobRunOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: JobRunOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => JobRunWhereUniqueInput, {
    nullable: true
  })
  cursor?: JobRunWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [JobRunScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "completedDate" | "startDate" | "name"> | undefined;
}
