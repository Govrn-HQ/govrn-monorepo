import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunCreateInput } from "../../../inputs/LinearJobRunCreateInput";
import { LinearJobRunUpdateInput } from "../../../inputs/LinearJobRunUpdateInput";
import { LinearJobRunWhereUniqueInput } from "../../../inputs/LinearJobRunWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLinearJobRunArgs {
  @TypeGraphQL.Field(_type => LinearJobRunWhereUniqueInput, {
    nullable: false
  })
  where!: LinearJobRunWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearJobRunCreateInput, {
    nullable: false
  })
  create!: LinearJobRunCreateInput;

  @TypeGraphQL.Field(_type => LinearJobRunUpdateInput, {
    nullable: false
  })
  update!: LinearJobRunUpdateInput;
}
