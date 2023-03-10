import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsCreateWithoutGuildInput } from "../inputs/VerificationSettingsCreateWithoutGuildInput";
import { VerificationSettingsUpdateWithoutGuildInput } from "../inputs/VerificationSettingsUpdateWithoutGuildInput";
import { VerificationSettingsWhereUniqueInput } from "../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingsUpsertWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingsUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingsUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: VerificationSettingsUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => VerificationSettingsCreateWithoutGuildInput, {
    nullable: false
  })
  create!: VerificationSettingsCreateWithoutGuildInput;
}
