import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractWhereUniqueInput } from "../../../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserSplitContractArgs {
  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: UserSplitContractWhereUniqueInput;
}
