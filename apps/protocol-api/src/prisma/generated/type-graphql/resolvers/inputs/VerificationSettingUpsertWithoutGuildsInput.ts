import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateWithoutGuildsInput } from "../inputs/VerificationSettingCreateWithoutGuildsInput";
import { VerificationSettingUpdateWithoutGuildsInput } from "../inputs/VerificationSettingUpdateWithoutGuildsInput";

@TypeGraphQL.InputType("VerificationSettingUpsertWithoutGuildsInput", {
  isAbstract: true
})
export class VerificationSettingUpsertWithoutGuildsInput {
  @TypeGraphQL.Field(_type => VerificationSettingUpdateWithoutGuildsInput, {
    nullable: false
  })
  update!: VerificationSettingUpdateWithoutGuildsInput;

  @TypeGraphQL.Field(_type => VerificationSettingCreateWithoutGuildsInput, {
    nullable: false
  })
  create!: VerificationSettingCreateWithoutGuildsInput;
}
