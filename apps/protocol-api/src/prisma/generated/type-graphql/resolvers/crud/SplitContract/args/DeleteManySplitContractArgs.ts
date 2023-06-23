import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractWhereInput } from "../../../inputs/SplitContractWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySplitContractArgs {
  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  where?: SplitContractWhereInput | undefined;
}
