import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobRunCreateInput } from "../../../inputs/JobRunCreateInput";
import { JobRunUpdateInput } from "../../../inputs/JobRunUpdateInput";
import { JobRunWhereUniqueInput } from "../../../inputs/JobRunWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertJobRunArgs {
  @TypeGraphQL.Field(_type => JobRunWhereUniqueInput, {
    nullable: false
  })
  where!: JobRunWhereUniqueInput;

  @TypeGraphQL.Field(_type => JobRunCreateInput, {
    nullable: false
  })
  create!: JobRunCreateInput;

  @TypeGraphQL.Field(_type => JobRunUpdateInput, {
    nullable: false
  })
  update!: JobRunUpdateInput;
}
