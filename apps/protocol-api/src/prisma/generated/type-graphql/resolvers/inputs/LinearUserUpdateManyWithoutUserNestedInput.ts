import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateManyUserInputEnvelope } from "../inputs/LinearUserCreateManyUserInputEnvelope";
import { LinearUserCreateOrConnectWithoutUserInput } from "../inputs/LinearUserCreateOrConnectWithoutUserInput";
import { LinearUserCreateWithoutUserInput } from "../inputs/LinearUserCreateWithoutUserInput";
import { LinearUserScalarWhereInput } from "../inputs/LinearUserScalarWhereInput";
import { LinearUserUpdateManyWithWhereWithoutUserInput } from "../inputs/LinearUserUpdateManyWithWhereWithoutUserInput";
import { LinearUserUpdateWithWhereUniqueWithoutUserInput } from "../inputs/LinearUserUpdateWithWhereUniqueWithoutUserInput";
import { LinearUserUpsertWithWhereUniqueWithoutUserInput } from "../inputs/LinearUserUpsertWithWhereUniqueWithoutUserInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class LinearUserUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [LinearUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: LinearUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: LinearUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: LinearUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: LinearUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LinearUserWhereUniqueInput], {
    nullable: true
  })
  set?: LinearUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LinearUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserWhereUniqueInput], {
    nullable: true
  })
  delete?: LinearUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserWhereUniqueInput], {
    nullable: true
  })
  connect?: LinearUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: LinearUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: LinearUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LinearUserScalarWhereInput[] | undefined;
}
