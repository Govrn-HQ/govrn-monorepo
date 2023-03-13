import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsCreateManyGuildInputEnvelope } from "../inputs/VerificationSettingsCreateManyGuildInputEnvelope";
import { VerificationSettingsCreateOrConnectWithoutGuildInput } from "../inputs/VerificationSettingsCreateOrConnectWithoutGuildInput";
import { VerificationSettingsCreateWithoutGuildInput } from "../inputs/VerificationSettingsCreateWithoutGuildInput";
import { VerificationSettingsWhereUniqueInput } from "../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingsCreateNestedManyWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingsCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [VerificationSettingsCreateWithoutGuildInput], {
    nullable: true
  })
  create?: VerificationSettingsCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: VerificationSettingsCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: VerificationSettingsCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsWhereUniqueInput], {
    nullable: true
  })
  connect?: VerificationSettingsWhereUniqueInput[] | undefined;
}
