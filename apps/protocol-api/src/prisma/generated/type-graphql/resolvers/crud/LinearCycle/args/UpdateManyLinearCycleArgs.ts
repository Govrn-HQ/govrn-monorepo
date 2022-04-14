import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearCycleUpdateManyMutationInput } from "../../../inputs/LinearCycleUpdateManyMutationInput";
import { LinearCycleWhereInput } from "../../../inputs/LinearCycleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLinearCycleArgs {
  @TypeGraphQL.Field(_type => LinearCycleUpdateManyMutationInput, {
    nullable: false
  })
  data!: LinearCycleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LinearCycleWhereInput, {
    nullable: true
  })
  where?: LinearCycleWhereInput | undefined;
}
