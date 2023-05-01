import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateManyMigrated_fromInputEnvelope } from "../inputs/GuildActivityTypeCreateManyMigrated_fromInputEnvelope";
import { GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput";
import { GuildActivityTypeCreateWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeCreateWithoutMigrated_fromInput";
import { GuildActivityTypeScalarWhereInput } from "../inputs/GuildActivityTypeScalarWhereInput";
import { GuildActivityTypeUpdateManyWithWhereWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeUpdateManyWithWhereWithoutMigrated_fromInput";
import { GuildActivityTypeUpdateWithWhereUniqueWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeUpdateWithWhereUniqueWithoutMigrated_fromInput";
import { GuildActivityTypeUpsertWithWhereUniqueWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeUpsertWithWhereUniqueWithoutMigrated_fromInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateManyWithoutMigrated_fromNestedInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateManyWithoutMigrated_fromNestedInput {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateWithoutMigrated_fromInput], {
    nullable: true
  })
  create?: GuildActivityTypeCreateWithoutMigrated_fromInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput], {
    nullable: true
  })
  connectOrCreate?: GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeUpsertWithWhereUniqueWithoutMigrated_fromInput], {
    nullable: true
  })
  upsert?: GuildActivityTypeUpsertWithWhereUniqueWithoutMigrated_fromInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateManyMigrated_fromInputEnvelope, {
    nullable: true
  })
  createMany?: GuildActivityTypeCreateManyMigrated_fromInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GuildActivityTypeUpdateWithWhereUniqueWithoutMigrated_fromInput], {
    nullable: true
  })
  update?: GuildActivityTypeUpdateWithWhereUniqueWithoutMigrated_fromInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeUpdateManyWithWhereWithoutMigrated_fromInput], {
    nullable: true
  })
  updateMany?: GuildActivityTypeUpdateManyWithWhereWithoutMigrated_fromInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildActivityTypeScalarWhereInput[] | undefined;
}
