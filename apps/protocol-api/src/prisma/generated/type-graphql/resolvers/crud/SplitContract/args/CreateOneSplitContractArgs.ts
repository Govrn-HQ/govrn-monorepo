import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractCreateInput } from "../../../inputs/SplitContractCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSplitContractArgs {
  @TypeGraphQL.Field(_type => SplitContractCreateInput, {
    nullable: false
  })
  data!: SplitContractCreateInput;
}
