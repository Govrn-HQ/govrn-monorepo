import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutVerificationSettingsInput } from "../inputs/GuildCreateOrConnectWithoutVerificationSettingsInput";
import { GuildCreateWithoutVerificationSettingsInput } from "../inputs/GuildCreateWithoutVerificationSettingsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedOneWithoutVerificationSettingsInput", {
  isAbstract: true
})
export class GuildCreateNestedOneWithoutVerificationSettingsInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutVerificationSettingsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutVerificationSettingsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutVerificationSettingsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutVerificationSettingsInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
