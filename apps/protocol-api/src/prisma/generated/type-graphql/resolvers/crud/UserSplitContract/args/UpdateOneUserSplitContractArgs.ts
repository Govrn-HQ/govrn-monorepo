import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractUpdateInput } from "../../../inputs/UserSplitContractUpdateInput";
import { UserSplitContractWhereUniqueInput } from "../../../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserSplitContractArgs {
  @TypeGraphQL.Field(_type => UserSplitContractUpdateInput, {
    nullable: false
  })
  data!: UserSplitContractUpdateInput;

  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: UserSplitContractWhereUniqueInput;
}
