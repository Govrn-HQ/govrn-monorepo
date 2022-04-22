import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainTypeCreateInput } from "../../../inputs/ChainTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateChainTypeArgs {
  @TypeGraphQL.Field(_type => ChainTypeCreateInput, {
    nullable: false
  })
  data!: ChainTypeCreateInput;
}
