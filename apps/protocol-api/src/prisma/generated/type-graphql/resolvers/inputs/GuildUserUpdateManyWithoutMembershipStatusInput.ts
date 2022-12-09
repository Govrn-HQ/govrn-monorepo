import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyMembershipStatusInputEnvelope } from "../inputs/GuildUserCreateManyMembershipStatusInputEnvelope";
import { GuildUserCreateOrConnectWithoutMembershipStatusInput } from "../inputs/GuildUserCreateOrConnectWithoutMembershipStatusInput";
import { GuildUserCreateWithoutMembershipStatusInput } from "../inputs/GuildUserCreateWithoutMembershipStatusInput";
import { GuildUserScalarWhereInput } from "../inputs/GuildUserScalarWhereInput";
import { GuildUserUpdateManyWithWhereWithoutMembershipStatusInput } from "../inputs/GuildUserUpdateManyWithWhereWithoutMembershipStatusInput";
import { GuildUserUpdateWithWhereUniqueWithoutMembershipStatusInput } from "../inputs/GuildUserUpdateWithWhereUniqueWithoutMembershipStatusInput";
import { GuildUserUpsertWithWhereUniqueWithoutMembershipStatusInput } from "../inputs/GuildUserUpsertWithWhereUniqueWithoutMembershipStatusInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateManyWithoutMembershipStatusInput", {
  isAbstract: true
})
export class GuildUserUpdateManyWithoutMembershipStatusInput {
  @TypeGraphQL.Field(_type => [GuildUserCreateWithoutMembershipStatusInput], {
    nullable: true
  })
  create?: GuildUserCreateWithoutMembershipStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserCreateOrConnectWithoutMembershipStatusInput], {
    nullable: true
  })
  connectOrCreate?: GuildUserCreateOrConnectWithoutMembershipStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpsertWithWhereUniqueWithoutMembershipStatusInput], {
    nullable: true
  })
  upsert?: GuildUserUpsertWithWhereUniqueWithoutMembershipStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildUserCreateManyMembershipStatusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildUserCreateManyMembershipStatusInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GuildUserUpdateWithWhereUniqueWithoutMembershipStatusInput], {
    nullable: true
  })
  update?: GuildUserUpdateWithWhereUniqueWithoutMembershipStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserUpdateManyWithWhereWithoutMembershipStatusInput], {
    nullable: true
  })
  updateMany?: GuildUserUpdateManyWithWhereWithoutMembershipStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildUserScalarWhereInput[] | undefined;
}
