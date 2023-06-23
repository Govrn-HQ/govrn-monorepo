import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractCreateInput } from "../../../inputs/UserSplitContractCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserSplitContractArgs {
  @TypeGraphQL.Field(_type => UserSplitContractCreateInput, {
    nullable: false
  })
  data!: UserSplitContractCreateInput;
}
