import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobRunWhereUniqueInput } from "../../../inputs/JobRunWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueJobRunOrThrowArgs {
  @TypeGraphQL.Field(_type => JobRunWhereUniqueInput, {
    nullable: false
  })
  where!: JobRunWhereUniqueInput;
}
