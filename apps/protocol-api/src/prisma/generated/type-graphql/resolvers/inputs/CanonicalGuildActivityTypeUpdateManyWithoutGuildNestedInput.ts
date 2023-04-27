import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateManyGuildInputEnvelope } from "../inputs/CanonicalGuildActivityTypeCreateManyGuildInputEnvelope";
import { CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput";
import { CanonicalGuildActivityTypeCreateWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeCreateWithoutGuildInput";
import { CanonicalGuildActivityTypeScalarWhereInput } from "../inputs/CanonicalGuildActivityTypeScalarWhereInput";
import { CanonicalGuildActivityTypeUpdateManyWithWhereWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeUpdateManyWithWhereWithoutGuildInput";
import { CanonicalGuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput";
import { CanonicalGuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeUpdateManyWithoutGuildNestedInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeUpdateManyWithoutGuildNestedInput {
  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeCreateWithoutGuildInput], {
    nullable: true
  })
  create?: CanonicalGuildActivityTypeCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: CanonicalGuildActivityTypeCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: CanonicalGuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: CanonicalGuildActivityTypeCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  set?: CanonicalGuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CanonicalGuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  delete?: CanonicalGuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: CanonicalGuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: CanonicalGuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: CanonicalGuildActivityTypeUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CanonicalGuildActivityTypeScalarWhereInput[] | undefined;
}
