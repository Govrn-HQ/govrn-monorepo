import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobRunUpdateManyMutationInput } from "../../../inputs/JobRunUpdateManyMutationInput";
import { JobRunWhereInput } from "../../../inputs/JobRunWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJobRunArgs {
  @TypeGraphQL.Field(_type => JobRunUpdateManyMutationInput, {
    nullable: false
  })
  data!: JobRunUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => JobRunWhereInput, {
    nullable: true
  })
  where?: JobRunWhereInput | undefined;
}
