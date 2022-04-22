import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunUpdateInput } from "../../../inputs/LinearJobRunUpdateInput";
import { LinearJobRunWhereUniqueInput } from "../../../inputs/LinearJobRunWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLinearJobRunArgs {
  @TypeGraphQL.Field(_type => LinearJobRunUpdateInput, {
    nullable: false
  })
  data!: LinearJobRunUpdateInput;

  @TypeGraphQL.Field(_type => LinearJobRunWhereUniqueInput, {
    nullable: false
  })
  where!: LinearJobRunWhereUniqueInput;
}
