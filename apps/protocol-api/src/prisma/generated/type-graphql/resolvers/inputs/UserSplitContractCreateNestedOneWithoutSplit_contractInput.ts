import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateOrConnectWithoutSplit_contractInput } from "../inputs/UserSplitContractCreateOrConnectWithoutSplit_contractInput";
import { UserSplitContractCreateWithoutSplit_contractInput } from "../inputs/UserSplitContractCreateWithoutSplit_contractInput";
import { UserSplitContractWhereUniqueInput } from "../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.InputType("UserSplitContractCreateNestedOneWithoutSplit_contractInput", {
  isAbstract: true
})
export class UserSplitContractCreateNestedOneWithoutSplit_contractInput {
  @TypeGraphQL.Field(_type => UserSplitContractCreateWithoutSplit_contractInput, {
    nullable: true
  })
  create?: UserSplitContractCreateWithoutSplit_contractInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractCreateOrConnectWithoutSplit_contractInput, {
    nullable: true
  })
  connectOrCreate?: UserSplitContractCreateOrConnectWithoutSplit_contractInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractWhereUniqueInput, {
    nullable: true
  })
  connect?: UserSplitContractWhereUniqueInput | undefined;
}
