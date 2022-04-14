import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearCycleWhereUniqueInput } from "../../../inputs/LinearCycleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLinearCycleArgs {
  @TypeGraphQL.Field(_type => LinearCycleWhereUniqueInput, {
    nullable: false
  })
  where!: LinearCycleWhereUniqueInput;
}
