import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyGuild_importInputEnvelope } from "../inputs/GuildUserCreateManyGuild_importInputEnvelope";
import { GuildUserCreateOrConnectWithoutGuild_importInput } from "../inputs/GuildUserCreateOrConnectWithoutGuild_importInput";
import { GuildUserCreateWithoutGuild_importInput } from "../inputs/GuildUserCreateWithoutGuild_importInput";
import { GuildUserScalarWhereInput } from "../inputs/GuildUserScalarWhereInput";
import { GuildUserUpdateManyWithWhereWithoutGuild_importInput } from "../inputs/GuildUserUpdateManyWithWhereWithoutGuild_importInput";
import { GuildUserUpdateWithWhereUniqueWithoutGuild_importInput } from "../inputs/GuildUserUpdateWithWhereUniqueWithoutGuild_importInput";
import { GuildUserUpsertWithWhereUniqueWithoutGuild_importInput } from "../inputs/GuildUserUpsertWithWhereUniqueWithoutGuild_importInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateManyWithoutGuild_importNestedInput", {
  isAbstract: true
})
export class GuildUserUpdateManyWithoutGuild_importNestedInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutGuild_importInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutGuild_importInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutGuild_importInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutGuild_importInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpsertWithWhereUniqueWithoutGuild_importInput], {
    nullable: true
  })
  upsert?: GuildUserUpsertWithWhereUniqueWithoutGuild_importInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyGuild_importInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyGuild_importInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GuildUserUpdateWithWhereUniqueWithoutGuild_importInput], {
    nullable: true
  })
  update?: GuildUserUpdateWithWhereUniqueWithoutGuild_importInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpdateManyWithWhereWithoutGuild_importInput], {
    nullable: true
  })
  updateMany?: GuildUserUpdateManyWithWhereWithoutGuild_importInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildUserScalarWhereInput[] | undefined;
}
