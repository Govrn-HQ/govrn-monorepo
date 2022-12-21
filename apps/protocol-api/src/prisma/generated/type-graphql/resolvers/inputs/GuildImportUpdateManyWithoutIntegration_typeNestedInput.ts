import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyIntegration_typeInputEnvelope } from "../inputs/GuildImportCreateManyIntegration_typeInputEnvelope";
import { GuildImportCreateOrConnectWithoutIntegration_typeInput } from "../inputs/GuildImportCreateOrConnectWithoutIntegration_typeInput";
import { GuildImportCreateWithoutIntegration_typeInput } from "../inputs/GuildImportCreateWithoutIntegration_typeInput";
import { GuildImportScalarWhereInput } from "../inputs/GuildImportScalarWhereInput";
import { GuildImportUpdateManyWithWhereWithoutIntegration_typeInput } from "../inputs/GuildImportUpdateManyWithWhereWithoutIntegration_typeInput";
import { GuildImportUpdateWithWhereUniqueWithoutIntegration_typeInput } from "../inputs/GuildImportUpdateWithWhereUniqueWithoutIntegration_typeInput";
import { GuildImportUpsertWithWhereUniqueWithoutIntegration_typeInput } from "../inputs/GuildImportUpsertWithWhereUniqueWithoutIntegration_typeInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportUpdateManyWithoutIntegration_typeNestedInput", {
  isAbstract: true
})
export class GuildImportUpdateManyWithoutIntegration_typeNestedInput {
  @TypeGraphQL.Field(_type => [GuildImportCreateWithoutIntegration_typeInput], {
    nullable: true
  })
  create?: GuildImportCreateWithoutIntegration_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportCreateOrConnectWithoutIntegration_typeInput], {
    nullable: true
  })
  connectOrCreate?: GuildImportCreateOrConnectWithoutIntegration_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportUpsertWithWhereUniqueWithoutIntegration_typeInput], {
    nullable: true
  })
  upsert?: GuildImportUpsertWithWhereUniqueWithoutIntegration_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateManyIntegration_typeInputEnvelope, {
    nullable: true
  })
  createMany?: GuildImportCreateManyIntegration_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  set?: GuildImportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuildImportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  delete?: GuildImportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildImportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportUpdateWithWhereUniqueWithoutIntegration_typeInput], {
    nullable: true
  })
  update?: GuildImportUpdateWithWhereUniqueWithoutIntegration_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportUpdateManyWithWhereWithoutIntegration_typeInput], {
    nullable: true
  })
  updateMany?: GuildImportUpdateManyWithWhereWithoutIntegration_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildImportScalarWhereInput[] | undefined;
}
