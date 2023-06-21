import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractWhereInput } from "../../../inputs/UserSplitContractWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserSplitContractArgs {
  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  where?: UserSplitContractWhereInput | undefined;
}
