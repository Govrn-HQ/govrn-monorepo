import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunCreateInput } from "../../../inputs/LinearJobRunCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLinearJobRunArgs {
  @TypeGraphQL.Field(_type => LinearJobRunCreateInput, {
    nullable: false
  })
  data!: LinearJobRunCreateInput;
}
