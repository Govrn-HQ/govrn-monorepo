import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainCreateInput } from "../../../inputs/ChainCreateInput";

@TypeGraphQL.ArgsType()
export class CreateChainArgs {
  @TypeGraphQL.Field(_type => ChainCreateInput, {
    nullable: false
  })
  data!: ChainCreateInput;
}
