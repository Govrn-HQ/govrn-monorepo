import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateWithoutSplit_contractInput } from "../inputs/UserSplitContractCreateWithoutSplit_contractInput";
import { UserSplitContractWhereUniqueInput } from "../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.InputType("UserSplitContractCreateOrConnectWithoutSplit_contractInput", {
  isAbstract: true
})
export class UserSplitContractCreateOrConnectWithoutSplit_contractInput {
  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: false
  })
  where!: UserSplitContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserSplitContractCreateWithoutSplit_contractInput, {
    nullable: false
  })
  create!: UserSplitContractCreateWithoutSplit_contractInput;
}
