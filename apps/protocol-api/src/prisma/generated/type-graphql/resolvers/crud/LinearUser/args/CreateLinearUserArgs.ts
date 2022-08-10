import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearUserCreateInput } from "../../../inputs/LinearUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLinearUserArgs {
  @TypeGraphQL.Field(_type => LinearUserCreateInput, {
    nullable: false
  })
  data!: LinearUserCreateInput;
}
