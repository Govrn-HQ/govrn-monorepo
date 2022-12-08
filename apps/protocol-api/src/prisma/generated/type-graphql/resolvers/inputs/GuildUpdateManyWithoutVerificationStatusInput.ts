import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateManyVerificationStatusInputEnvelope } from "../inputs/GuildCreateManyVerificationStatusInputEnvelope";
import { GuildCreateOrConnectWithoutVerificationStatusInput } from "../inputs/GuildCreateOrConnectWithoutVerificationStatusInput";
import { GuildCreateWithoutVerificationStatusInput } from "../inputs/GuildCreateWithoutVerificationStatusInput";
import { GuildScalarWhereInput } from "../inputs/GuildScalarWhereInput";
import { GuildUpdateManyWithWhereWithoutVerificationStatusInput } from "../inputs/GuildUpdateManyWithWhereWithoutVerificationStatusInput";
import { GuildUpdateWithWhereUniqueWithoutVerificationStatusInput } from "../inputs/GuildUpdateWithWhereUniqueWithoutVerificationStatusInput";
import { GuildUpsertWithWhereUniqueWithoutVerificationStatusInput } from "../inputs/GuildUpsertWithWhereUniqueWithoutVerificationStatusInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateManyWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildUpdateManyWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => [GuildCreateWithoutVerificationStatusInput], {
    nullable: true
  })
  create?: GuildCreateWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildCreateOrConnectWithoutVerificationStatusInput], {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUpsertWithWhereUniqueWithoutVerificationStatusInput], {
    nullable: true
  })
  upsert?: GuildUpsertWithWhereUniqueWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildCreateManyVerificationStatusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildCreateManyVerificationStatusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  set?: GuildWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuildWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  delete?: GuildWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUpdateWithWhereUniqueWithoutVerificationStatusInput], {
    nullable: true
  })
  update?: GuildUpdateWithWhereUniqueWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUpdateManyWithWhereWithoutVerificationStatusInput], {
    nullable: true
  })
  updateMany?: GuildUpdateManyWithWhereWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildScalarWhereInput[] | undefined;
}
