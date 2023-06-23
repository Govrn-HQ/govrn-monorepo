import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractCreateManyUserInputEnvelope } from "../inputs/UserSplitContractCreateManyUserInputEnvelope";
import { UserSplitContractCreateOrConnectWithoutUserInput } from "../inputs/UserSplitContractCreateOrConnectWithoutUserInput";
import { UserSplitContractCreateWithoutUserInput } from "../inputs/UserSplitContractCreateWithoutUserInput";
import { UserSplitContractScalarWhereInput } from "../inputs/UserSplitContractScalarWhereInput";
import { UserSplitContractUpdateManyWithWhereWithoutUserInput } from "../inputs/UserSplitContractUpdateManyWithWhereWithoutUserInput";
import { UserSplitContractUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserSplitContractUpdateWithWhereUniqueWithoutUserInput";
import { UserSplitContractUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserSplitContractUpsertWithWhereUniqueWithoutUserInput";
import { UserSplitContractWhereUniqueInput } from "../inputs/UserSplitContractWhereUniqueInput";

@TypeGraphQL.InputType("UserSplitContractUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class UserSplitContractUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserSplitContractCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserSplitContractCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserSplitContractCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserSplitContractUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserSplitContractCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractWhereUniqueInput], {
    nullable: true
  })
  set?: UserSplitContractWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserSplitContractWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractWhereUniqueInput], {
    nullable: true
  })
  delete?: UserSplitContractWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractWhereUniqueInput], {
    nullable: true
  })
  connect?: UserSplitContractWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserSplitContractUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserSplitContractUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserSplitContractScalarWhereInput[] | undefined;
}
