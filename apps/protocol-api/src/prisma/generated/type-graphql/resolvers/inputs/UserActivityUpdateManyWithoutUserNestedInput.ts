import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityCreateManyUserInputEnvelope } from "../inputs/UserActivityCreateManyUserInputEnvelope";
import { UserActivityCreateOrConnectWithoutUserInput } from "../inputs/UserActivityCreateOrConnectWithoutUserInput";
import { UserActivityCreateWithoutUserInput } from "../inputs/UserActivityCreateWithoutUserInput";
import { UserActivityScalarWhereInput } from "../inputs/UserActivityScalarWhereInput";
import { UserActivityUpdateManyWithWhereWithoutUserInput } from "../inputs/UserActivityUpdateManyWithWhereWithoutUserInput";
import { UserActivityUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserActivityUpdateWithWhereUniqueWithoutUserInput";
import { UserActivityUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserActivityUpsertWithWhereUniqueWithoutUserInput";
import { UserActivityWhereUniqueInput } from "../inputs/UserActivityWhereUniqueInput";

@TypeGraphQL.InputType("UserActivityUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class UserActivityUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserActivityCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserActivityCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserActivityUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserActivityCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserActivityCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserActivityWhereUniqueInput], {
    nullable: true
  })
  set?: UserActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityWhereUniqueInput], {
    nullable: true
  })
  delete?: UserActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityWhereUniqueInput], {
    nullable: true
  })
  connect?: UserActivityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserActivityUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserActivityUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserActivityScalarWhereInput[] | undefined;
}
