import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyMembership_statusInputEnvelope } from "../inputs/GuildUserCreateManyMembership_statusInputEnvelope";
import { GuildUserCreateOrConnectWithoutMembership_statusInput } from "../inputs/GuildUserCreateOrConnectWithoutMembership_statusInput";
import { GuildUserCreateWithoutMembership_statusInput } from "../inputs/GuildUserCreateWithoutMembership_statusInput";
import { GuildUserScalarWhereInput } from "../inputs/GuildUserScalarWhereInput";
import { GuildUserUpdateManyWithWhereWithoutMembership_statusInput } from "../inputs/GuildUserUpdateManyWithWhereWithoutMembership_statusInput";
import { GuildUserUpdateWithWhereUniqueWithoutMembership_statusInput } from "../inputs/GuildUserUpdateWithWhereUniqueWithoutMembership_statusInput";
import { GuildUserUpsertWithWhereUniqueWithoutMembership_statusInput } from "../inputs/GuildUserUpsertWithWhereUniqueWithoutMembership_statusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateManyWithoutMembership_statusNestedInput", {
  isAbstract: true
})
export class GuildUserUpdateManyWithoutMembership_statusNestedInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutMembership_statusInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutMembership_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutMembership_statusInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutMembership_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpsertWithWhereUniqueWithoutMembership_statusInput], {
    nullable: true
  })
  upsert?: GuildUserUpsertWithWhereUniqueWithoutMembership_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyMembership_statusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyMembership_statusInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GuildUserUpdateWithWhereUniqueWithoutMembership_statusInput], {
    nullable: true
  })
  update?: GuildUserUpdateWithWhereUniqueWithoutMembership_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpdateManyWithWhereWithoutMembership_statusInput], {
    nullable: true
  })
  updateMany?: GuildUserUpdateManyWithWhereWithoutMembership_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildUserScalarWhereInput[] | undefined;
}
