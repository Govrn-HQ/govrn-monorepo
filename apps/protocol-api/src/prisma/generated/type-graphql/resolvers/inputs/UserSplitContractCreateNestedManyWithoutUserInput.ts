import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateManyUserInputEnvelope } from "../inputs/UserSplitContractCreateManyUserInputEnvelope";
import { UserSplitContractCreateOrConnectWithoutUserInput } from "../inputs/UserSplitContractCreateOrConnectWithoutUserInput";
import { UserSplitContractCreateWithoutUserInput } from "../inputs/UserSplitContractCreateWithoutUserInput";
import { UserSplitContractWhereUniqueInput } from "../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.InputType("UserSplitContractCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class UserSplitContractCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserSplitContractCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserSplitContractCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserSplitContractCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserSplitContractCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractWhereUniqueInput], {
    nullable: true
  })
  connect?: UserSplitContractWhereUniqueInput[] | undefined;
}
