import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobRunCreateInput } from "../../../inputs/JobRunCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneJobRunArgs {
  @TypeGraphQL.Field(_type => JobRunCreateInput, {
    nullable: false
  })
  data!: JobRunCreateInput;
}
