import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingUpdateWithoutGuildInput } from "../inputs/VerificationSettingUpdateWithoutGuildInput";
import { VerificationSettingWhereUniqueInput } from "../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingUpdateWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: VerificationSettingUpdateWithoutGuildInput;
}
