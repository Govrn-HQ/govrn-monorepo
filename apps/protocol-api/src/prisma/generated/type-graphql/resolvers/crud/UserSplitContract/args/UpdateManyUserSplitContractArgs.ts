import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSplitContractUpdateManyMutationInput } from "../../../inputs/UserSplitContractUpdateManyMutationInput";
import { UserSplitContractWhereInput } from "../../../inputs/UserSplitContractWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserSplitContractArgs {
  @TypeGraphQL.Field(_type => UserSplitContractUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserSplitContractUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  where?: UserSplitContractWhereInput | undefined;
}
