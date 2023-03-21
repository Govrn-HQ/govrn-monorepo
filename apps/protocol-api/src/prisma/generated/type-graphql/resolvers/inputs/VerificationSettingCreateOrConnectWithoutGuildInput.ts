import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateWithoutGuildInput } from "../inputs/VerificationSettingCreateWithoutGuildInput";
import { VerificationSettingWhereUniqueInput } from "../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingCreateOrConnectWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingCreateWithoutGuildInput, {
    nullable: false
  })
  create!: VerificationSettingCreateWithoutGuildInput;
}
