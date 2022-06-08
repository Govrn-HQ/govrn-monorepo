import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateManyActivity_typeInputEnvelope } from "../inputs/GuildActivityTypeCreateManyActivity_typeInputEnvelope";
import { GuildActivityTypeCreateOrConnectWithoutActivity_typeInput } from "../inputs/GuildActivityTypeCreateOrConnectWithoutActivity_typeInput";
import { GuildActivityTypeCreateWithoutActivity_typeInput } from "../inputs/GuildActivityTypeCreateWithoutActivity_typeInput";
import { GuildActivityTypeScalarWhereInput } from "../inputs/GuildActivityTypeScalarWhereInput";
import { GuildActivityTypeUpdateManyWithWhereWithoutActivity_typeInput } from "../inputs/GuildActivityTypeUpdateManyWithWhereWithoutActivity_typeInput";
import { GuildActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput } from "../inputs/GuildActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput";
import { GuildActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput } from "../inputs/GuildActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateManyWithoutActivity_typeInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateManyWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateWithoutActivity_typeInput], {
    nullable: true
  })
  create?: GuildActivityTypeCreateWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateOrConnectWithoutActivity_typeInput], {
    nullable: true
  })
  connectOrCreate?: GuildActivityTypeCreateOrConnectWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput], {
    nullable: true
  })
  upsert?: GuildActivityTypeUpsertWithWhereUniqueWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateManyActivity_typeInputEnvelope, {
    nullable: true
  })
  createMany?: GuildActivityTypeCreateManyActivity_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  set?: GuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  delete?: GuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildActivityTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput], {
    nullable: true
  })
  update?: GuildActivityTypeUpdateWithWhereUniqueWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeUpdateManyWithWhereWithoutActivity_typeInput], {
    nullable: true
  })
  updateMany?: GuildActivityTypeUpdateManyWithWhereWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildActivityTypeScalarWhereInput[] | undefined;
}
