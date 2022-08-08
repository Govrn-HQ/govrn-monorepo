import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearCycleUpdateInput } from "../../../inputs/LinearCycleUpdateInput";
import { LinearCycleWhereUniqueInput } from "../../../inputs/LinearCycleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLinearCycleArgs {
  @TypeGraphQL.Field(_type => LinearCycleUpdateInput, {
    nullable: false
  })
  data!: LinearCycleUpdateInput;

  @TypeGraphQL.Field(_type => LinearCycleWhereUniqueInput, {
    nullable: false
  })
  where!: LinearCycleWhereUniqueInput;
}
