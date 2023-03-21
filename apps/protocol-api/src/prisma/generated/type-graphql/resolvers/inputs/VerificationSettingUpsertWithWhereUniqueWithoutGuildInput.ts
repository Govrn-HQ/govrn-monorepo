import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateWithoutGuildInput } from "../inputs/VerificationSettingCreateWithoutGuildInput";
import { VerificationSettingUpdateWithoutGuildInput } from "../inputs/VerificationSettingUpdateWithoutGuildInput";
import { VerificationSettingWhereUniqueInput } from "../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingUpsertWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: VerificationSettingUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => VerificationSettingCreateWithoutGuildInput, {
    nullable: false
  })
  create!: VerificationSettingCreateWithoutGuildInput;
}
