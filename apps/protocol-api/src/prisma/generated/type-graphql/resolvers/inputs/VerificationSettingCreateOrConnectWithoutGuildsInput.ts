import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateWithoutGuildsInput } from "../inputs/VerificationSettingCreateWithoutGuildsInput";
import { VerificationSettingWhereUniqueInput } from "../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingCreateOrConnectWithoutGuildsInput", {
  isAbstract: true
})
export class VerificationSettingCreateOrConnectWithoutGuildsInput {
  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingCreateWithoutGuildsInput, {
    nullable: false
  })
  create!: VerificationSettingCreateWithoutGuildsInput;
}
