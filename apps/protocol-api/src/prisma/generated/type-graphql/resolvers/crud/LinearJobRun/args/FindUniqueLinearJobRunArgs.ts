import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunWhereUniqueInput } from "../../../inputs/LinearJobRunWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLinearJobRunArgs {
  @TypeGraphQL.Field(_type => LinearJobRunWhereUniqueInput, {
    nullable: false
  })
  where!: LinearJobRunWhereUniqueInput;
}
