import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractCreateInput } from "../../../inputs/SplitContractCreateInput";
import { SplitContractUpdateInput } from "../../../inputs/SplitContractUpdateInput";
import { SplitContractWhereUniqueInput } from "../../../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSplitContractArgs {
  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: SplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitContractCreateInput, {
    nullable: false
  })
  create!: SplitContractCreateInput;

  @TypeGraphQL.Field(_type => SplitContractUpdateInput, {
    nullable: false
  })
  update!: SplitContractUpdateInput;
}
