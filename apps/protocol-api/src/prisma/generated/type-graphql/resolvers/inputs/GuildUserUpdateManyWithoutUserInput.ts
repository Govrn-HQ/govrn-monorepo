import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyUserInputEnvelope } from "../inputs/GuildUserCreateManyUserInputEnvelope";
import { GuildUserCreateOrConnectWithoutUserInput } from "../inputs/GuildUserCreateOrConnectWithoutUserInput";
import { GuildUserCreateWithoutUserInput } from "../inputs/GuildUserCreateWithoutUserInput";
import { GuildUserScalarWhereInput } from "../inputs/GuildUserScalarWhereInput";
import { GuildUserUpdateManyWithWhereWithoutUserInput } from "../inputs/GuildUserUpdateManyWithWhereWithoutUserInput";
import { GuildUserUpdateWithWhereUniqueWithoutUserInput } from "../inputs/GuildUserUpdateWithWhereUniqueWithoutUserInput";
import { GuildUserUpsertWithWhereUniqueWithoutUserInput } from "../inputs/GuildUserUpsertWithWhereUniqueWithoutUserInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class GuildUserUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: GuildUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GuildUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: GuildUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: GuildUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildUserScalarWhereInput[] | undefined;
}
