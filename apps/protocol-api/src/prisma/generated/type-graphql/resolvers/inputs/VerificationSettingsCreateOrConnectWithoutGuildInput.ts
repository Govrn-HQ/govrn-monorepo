import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsCreateWithoutGuildInput } from "../inputs/VerificationSettingsCreateWithoutGuildInput";
import { VerificationSettingsWhereUniqueInput } from "../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingsCreateOrConnectWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingsCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VerificationSettingsCreateWithoutGuildInput, {
    nullable: false
  })
  create!: VerificationSettingsCreateWithoutGuildInput;
}
