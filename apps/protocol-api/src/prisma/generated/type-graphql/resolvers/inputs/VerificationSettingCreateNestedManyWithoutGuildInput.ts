import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateManyGuildInputEnvelope } from "../inputs/VerificationSettingCreateManyGuildInputEnvelope";
import { VerificationSettingCreateOrConnectWithoutGuildInput } from "../inputs/VerificationSettingCreateOrConnectWithoutGuildInput";
import { VerificationSettingCreateWithoutGuildInput } from "../inputs/VerificationSettingCreateWithoutGuildInput";
import { VerificationSettingWhereUniqueInput } from "../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingCreateNestedManyWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [VerificationSettingCreateWithoutGuildInput], {
    nullable: true
  })
  create?: VerificationSettingCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: VerificationSettingCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: VerificationSettingCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingWhereUniqueInput], {
    nullable: true
  })
  connect?: VerificationSettingWhereUniqueInput[] | undefined;
}
