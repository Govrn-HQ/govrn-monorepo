import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobRunOrderByWithRelationInput } from "../../../inputs/JobRunOrderByWithRelationInput";
import { JobRunWhereInput } from "../../../inputs/JobRunWhereInput";
import { JobRunWhereUniqueInput } from "../../../inputs/JobRunWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateJobRunArgs {
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
}
