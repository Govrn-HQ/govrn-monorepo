import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateOrConnectWithoutGuildsInput } from "../inputs/VerificationSettingCreateOrConnectWithoutGuildsInput";
import { VerificationSettingCreateWithoutGuildsInput } from "../inputs/VerificationSettingCreateWithoutGuildsInput";
import { VerificationSettingWhereUniqueInput } from "../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingCreateNestedOneWithoutGuildsInput", {
  isAbstract: true
})
export class VerificationSettingCreateNestedOneWithoutGuildsInput {
  @TypeGraphQL.Field(_type => VerificationSettingCreateWithoutGuildsInput, {
    nullable: true
  })
  create?: VerificationSettingCreateWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingCreateOrConnectWithoutGuildsInput, {
    nullable: true
  })
  connectOrCreate?: VerificationSettingCreateOrConnectWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingWhereUniqueInput, {
    nullable: true
  })
  connect?: VerificationSettingWhereUniqueInput | undefined;
}
