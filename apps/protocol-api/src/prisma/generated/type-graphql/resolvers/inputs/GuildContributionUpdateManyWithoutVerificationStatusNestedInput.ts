import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateManyVerificationStatusInputEnvelope } from "../inputs/GuildContributionCreateManyVerificationStatusInputEnvelope";
import { GuildContributionCreateOrConnectWithoutVerificationStatusInput } from "../inputs/GuildContributionCreateOrConnectWithoutVerificationStatusInput";
import { GuildContributionCreateWithoutVerificationStatusInput } from "../inputs/GuildContributionCreateWithoutVerificationStatusInput";
import { GuildContributionScalarWhereInput } from "../inputs/GuildContributionScalarWhereInput";
import { GuildContributionUpdateManyWithWhereWithoutVerificationStatusInput } from "../inputs/GuildContributionUpdateManyWithWhereWithoutVerificationStatusInput";
import { GuildContributionUpdateWithWhereUniqueWithoutVerificationStatusInput } from "../inputs/GuildContributionUpdateWithWhereUniqueWithoutVerificationStatusInput";
import { GuildContributionUpsertWithWhereUniqueWithoutVerificationStatusInput } from "../inputs/GuildContributionUpsertWithWhereUniqueWithoutVerificationStatusInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionUpdateManyWithoutVerificationStatusNestedInput", {
  isAbstract: true
})
export class GuildContributionUpdateManyWithoutVerificationStatusNestedInput {
  @TypeGraphQL.Field(_type => [GuildContributionCreateWithoutVerificationStatusInput], {
    nullable: true
  })
  create?: GuildContributionCreateWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionCreateOrConnectWithoutVerificationStatusInput], {
    nullable: true
  })
  connectOrCreate?: GuildContributionCreateOrConnectWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionUpsertWithWhereUniqueWithoutVerificationStatusInput], {
    nullable: true
  })
  upsert?: GuildContributionUpsertWithWhereUniqueWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildContributionCreateManyVerificationStatusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildContributionCreateManyVerificationStatusInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GuildContributionUpdateWithWhereUniqueWithoutVerificationStatusInput], {
    nullable: true
  })
  update?: GuildContributionUpdateWithWhereUniqueWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionUpdateManyWithWhereWithoutVerificationStatusInput], {
    nullable: true
  })
  updateMany?: GuildContributionUpdateManyWithWhereWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildContributionScalarWhereInput[] | undefined;
}
