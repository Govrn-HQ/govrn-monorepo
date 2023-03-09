import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutVerificationSettingsInput } from "../inputs/GuildCreateOrConnectWithoutVerificationSettingsInput";
import { GuildCreateWithoutVerificationSettingsInput } from "../inputs/GuildCreateWithoutVerificationSettingsInput";
import { GuildUpdateWithoutVerificationSettingsInput } from "../inputs/GuildUpdateWithoutVerificationSettingsInput";
import { GuildUpsertWithoutVerificationSettingsInput } from "../inputs/GuildUpsertWithoutVerificationSettingsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateOneWithoutVerificationSettingsNestedInput", {
  isAbstract: true
})
export class GuildUpdateOneWithoutVerificationSettingsNestedInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutVerificationSettingsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutVerificationSettingsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutVerificationSettingsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutVerificationSettingsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutVerificationSettingsInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutVerificationSettingsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutVerificationSettingsInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutVerificationSettingsInput | undefined;
}
