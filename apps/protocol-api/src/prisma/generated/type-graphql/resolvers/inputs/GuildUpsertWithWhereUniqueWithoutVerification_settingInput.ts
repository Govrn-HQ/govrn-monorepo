import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutVerification_settingInput } from "../inputs/GuildCreateWithoutVerification_settingInput";
import { GuildUpdateWithoutVerification_settingInput } from "../inputs/GuildUpdateWithoutVerification_settingInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpsertWithWhereUniqueWithoutVerification_settingInput", {
  isAbstract: true
})
export class GuildUpsertWithWhereUniqueWithoutVerification_settingInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutVerification_settingInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutVerification_settingInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutVerification_settingInput, {
    nullable: false
  })
  create!: GuildCreateWithoutVerification_settingInput;
}
