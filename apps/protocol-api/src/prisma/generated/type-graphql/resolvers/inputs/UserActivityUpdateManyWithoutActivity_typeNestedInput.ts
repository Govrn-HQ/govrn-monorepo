import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserActivityCreateManyActivity_typeInputEnvelope } from "../inputs/UserActivityCreateManyActivity_typeInputEnvelope";
import { UserActivityCreateOrConnectWithoutActivity_typeInput } from "../inputs/UserActivityCreateOrConnectWithoutActivity_typeInput";
import { UserActivityCreateWithoutActivity_typeInput } from "../inputs/UserActivityCreateWithoutActivity_typeInput";
import { UserActivityScalarWhereInput } from "../inputs/UserActivityScalarWhereInput";
import { UserActivityUpdateManyWithWhereWithoutActivity_typeInput } from "../inputs/UserActivityUpdateManyWithWhereWithoutActivity_typeInput";
import { UserActivityUpdateWithWhereUniqueWithoutActivity_typeInput } from "../inputs/UserActivityUpdateWithWhereUniqueWithoutActivity_typeInput";
import { UserActivityUpsertWithWhereUniqueWithoutActivity_typeInput } from "../inputs/UserActivityUpsertWithWhereUniqueWithoutActivity_typeInput";
import { UserActivityWhereUniqueInput } from "../inputs/UserActivityWhereUniqueInput";

@TypeGraphQL.InputType("UserActivityUpdateManyWithoutActivity_typeNestedInput", {
  isAbstract: true
})
export class UserActivityUpdateManyWithoutActivity_typeNestedInput {
  @TypeGraphQL.Field(_type => [UserActivityCreateWithoutActivity_typeInput], {
    nullable: true
  })
  create?: UserActivityCreateWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityCreateOrConnectWithoutActivity_typeInput], {
    nullable: true
  })
  connectOrCreate?: UserActivityCreateOrConnectWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityUpsertWithWhereUniqueWithoutActivity_typeInput], {
    nullable: true
  })
  upsert?: UserActivityUpsertWithWhereUniqueWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => UserActivityCreateManyActivity_typeInputEnvelope, {
    nullable: true
  })
  createMany?: UserActivityCreateManyActivity_typeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserActivityUpdateWithWhereUniqueWithoutActivity_typeInput], {
    nullable: true
  })
  update?: UserActivityUpdateWithWhereUniqueWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityUpdateManyWithWhereWithoutActivity_typeInput], {
    nullable: true
  })
  updateMany?: UserActivityUpdateManyWithWhereWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserActivityScalarWhereInput[] | undefined;
}
