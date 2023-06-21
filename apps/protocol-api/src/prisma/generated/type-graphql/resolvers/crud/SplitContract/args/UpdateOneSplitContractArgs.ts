import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractUpdateInput } from "../../../inputs/SplitContractUpdateInput";
import { SplitContractWhereUniqueInput } from "../../../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSplitContractArgs {
  @TypeGraphQL.Field(_type => SplitContractUpdateInput, {
    nullable: false
  })
  data!: SplitContractUpdateInput;

  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;
}
