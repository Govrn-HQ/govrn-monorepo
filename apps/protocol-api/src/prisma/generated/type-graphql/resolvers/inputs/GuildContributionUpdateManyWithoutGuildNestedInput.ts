import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateManyGuildInputEnvelope } from "../inputs/GuildContributionCreateManyGuildInputEnvelope";
import { GuildContributionCreateOrConnectWithoutGuildInput } from "../inputs/GuildContributionCreateOrConnectWithoutGuildInput";
import { GuildContributionCreateWithoutGuildInput } from "../inputs/GuildContributionCreateWithoutGuildInput";
import { GuildContributionScalarWhereInput } from "../inputs/GuildContributionScalarWhereInput";
import { GuildContributionUpdateManyWithWhereWithoutGuildInput } from "../inputs/GuildContributionUpdateManyWithWhereWithoutGuildInput";
import { GuildContributionUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/GuildContributionUpdateWithWhereUniqueWithoutGuildInput";
import { GuildContributionUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/GuildContributionUpsertWithWhereUniqueWithoutGuildInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionUpdateManyWithoutGuildNestedInput", {
  isAbstract: true
})
export class GuildContributionUpdateManyWithoutGuildNestedInput {
  @TypeGraphQL.Field(_type => [GuildContributionCreateWithoutGuildInput], {
    nullable: true
  })
  create?: GuildContributionCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: GuildContributionCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: GuildContributionUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildContributionCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: GuildContributionCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true
  })
  set?: GuildContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuildContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true
  })
  delete?: GuildContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: GuildContributionUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: GuildContributionUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildContributionScalarWhereInput[] | undefined;
}
