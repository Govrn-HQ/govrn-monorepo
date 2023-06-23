import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractWhereUniqueInput } from "../../../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSplitContractOrThrowArgs {
  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;
}
