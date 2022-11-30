import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearProjectCreateInput } from "../../../inputs/LinearProjectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLinearProjectArgs {
  @TypeGraphQL.Field(_type => LinearProjectCreateInput, {
    nullable: false
  })
  data!: LinearProjectCreateInput;
}
