import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyGuildInputEnvelope } from "../inputs/GuildUserCreateManyGuildInputEnvelope";
import { GuildUserCreateOrConnectWithoutGuildInput } from "../inputs/GuildUserCreateOrConnectWithoutGuildInput";
import { GuildUserCreateWithoutGuildInput } from "../inputs/GuildUserCreateWithoutGuildInput";
import { GuildUserScalarWhereInput } from "../inputs/GuildUserScalarWhereInput";
import { GuildUserUpdateManyWithWhereWithoutGuildInput } from "../inputs/GuildUserUpdateManyWithWhereWithoutGuildInput";
import { GuildUserUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/GuildUserUpdateWithWhereUniqueWithoutGuildInput";
import { GuildUserUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/GuildUserUpsertWithWhereUniqueWithoutGuildInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateManyWithoutGuildInput", {
  isAbstract: true
})
export class GuildUserUpdateManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutGuildInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: GuildUserUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true
  })
  set?: GuildUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuildUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true
  })
  delete?: GuildUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: GuildUserUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: GuildUserUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildUserScalarWhereInput[] | undefined;
}
