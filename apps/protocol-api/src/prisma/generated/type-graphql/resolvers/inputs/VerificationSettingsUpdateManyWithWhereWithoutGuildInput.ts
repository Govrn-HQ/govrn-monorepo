import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsScalarWhereInput } from "../inputs/VerificationSettingsScalarWhereInput";
import { VerificationSettingsUpdateManyMutationInput } from "../inputs/VerificationSettingsUpdateManyMutationInput";

@TypeGraphQL.InputType("VerificationSettingsUpdateManyWithWhereWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingsUpdateManyWithWhereWithoutGuildInput {
  @TypeGraphQL.Field(_type => VerificationSettingsScalarWhereInput, {
    nullable: false
  })
  where!: VerificationSettingsScalarWhereInput;

  @TypeGraphQL.Field(_type => VerificationSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VerificationSettingsUpdateManyMutationInput;
}
