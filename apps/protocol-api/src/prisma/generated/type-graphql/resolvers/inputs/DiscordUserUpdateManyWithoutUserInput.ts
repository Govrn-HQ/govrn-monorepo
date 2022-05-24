import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscordUserCreateManyUserInputEnvelope } from "../inputs/DiscordUserCreateManyUserInputEnvelope";
import { DiscordUserCreateOrConnectWithoutUserInput } from "../inputs/DiscordUserCreateOrConnectWithoutUserInput";
import { DiscordUserCreateWithoutUserInput } from "../inputs/DiscordUserCreateWithoutUserInput";
import { DiscordUserScalarWhereInput } from "../inputs/DiscordUserScalarWhereInput";
import { DiscordUserUpdateManyWithWhereWithoutUserInput } from "../inputs/DiscordUserUpdateManyWithWhereWithoutUserInput";
import { DiscordUserUpdateWithWhereUniqueWithoutUserInput } from "../inputs/DiscordUserUpdateWithWhereUniqueWithoutUserInput";
import { DiscordUserUpsertWithWhereUniqueWithoutUserInput } from "../inputs/DiscordUserUpsertWithWhereUniqueWithoutUserInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType("DiscordUserUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class DiscordUserUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [DiscordUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: DiscordUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: DiscordUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: DiscordUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: DiscordUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserWhereUniqueInput], {
    nullable: true
  })
  set?: DiscordUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DiscordUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserWhereUniqueInput], {
    nullable: true
  })
  delete?: DiscordUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserWhereUniqueInput], {
    nullable: true
  })
  connect?: DiscordUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: DiscordUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: DiscordUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DiscordUserScalarWhereInput[] | undefined;
}
