import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateWithoutUserInput } from "../inputs/UserSplitContractCreateWithoutUserInput";
import { UserSplitContractWhereUniqueInput } from "../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.InputType("UserSplitContractCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class UserSplitContractCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: UserSplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserSplitContractCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserSplitContractCreateWithoutUserInput;
}
