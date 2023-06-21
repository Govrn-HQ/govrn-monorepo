import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractCreateInput } from "../../../inputs/UserSplitContractCreateInput";
import { UserSplitContractUpdateInput } from "../../../inputs/UserSplitContractUpdateInput";
import { UserSplitContractWhereUniqueInput } from "../../../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserSplitContractArgs {
  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: UserSplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserSplitContractCreateInput, {
    nullable: false
  })
  create!: UserSplitContractCreateInput;

  @TypeGraphQL.Field(_type => UserSplitContractUpdateInput, {
    nullable: false
  })
  update!: UserSplitContractUpdateInput;
}
