import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunUpdateManyMutationInput } from "../../../inputs/LinearJobRunUpdateManyMutationInput";
import { LinearJobRunWhereInput } from "../../../inputs/LinearJobRunWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLinearJobRunArgs {
  @TypeGraphQL.Field(_type => LinearJobRunUpdateManyMutationInput, {
    nullable: false
  })
  data!: LinearJobRunUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LinearJobRunWhereInput, {
    nullable: true
  })
  where?: LinearJobRunWhereInput | undefined;
}
