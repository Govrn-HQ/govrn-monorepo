import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsUpdateWithoutGuildInput } from "../inputs/VerificationSettingsUpdateWithoutGuildInput";
import { VerificationSettingsWhereUniqueInput } from "../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingsUpdateWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingsUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingsUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: VerificationSettingsUpdateWithoutGuildInput;
}
