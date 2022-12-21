import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobRunUpdateInput } from "../../../inputs/JobRunUpdateInput";
import { JobRunWhereUniqueInput } from "../../../inputs/JobRunWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneJobRunArgs {
  @TypeGraphQL.Field(_type => JobRunUpdateInput, {
    nullable: false
  })
  data!: JobRunUpdateInput;

  @TypeGraphQL.Field(_type => JobRunWhereUniqueInput, {
    nullable: false
  })
  where!: JobRunWhereUniqueInput;
}
