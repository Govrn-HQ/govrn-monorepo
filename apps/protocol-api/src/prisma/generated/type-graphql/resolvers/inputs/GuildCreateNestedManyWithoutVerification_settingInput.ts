import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateManyVerification_settingInputEnvelope } from "../inputs/GuildCreateManyVerification_settingInputEnvelope";
import { GuildCreateOrConnectWithoutVerification_settingInput } from "../inputs/GuildCreateOrConnectWithoutVerification_settingInput";
import { GuildCreateWithoutVerification_settingInput } from "../inputs/GuildCreateWithoutVerification_settingInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedManyWithoutVerification_settingInput", {
  isAbstract: true
})
export class GuildCreateNestedManyWithoutVerification_settingInput {
  @TypeGraphQL.Field(_type => [GuildCreateWithoutVerification_settingInput], {
    nullable: true
  })
  create?: GuildCreateWithoutVerification_settingInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildCreateOrConnectWithoutVerification_settingInput], {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutVerification_settingInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildCreateManyVerification_settingInputEnvelope, {
    nullable: true
  })
  createMany?: GuildCreateManyVerification_settingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildWhereUniqueInput[] | undefined;
}
