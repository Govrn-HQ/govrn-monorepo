import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingScalarWhereInput } from "../inputs/VerificationSettingScalarWhereInput";
import { VerificationSettingUpdateManyMutationInput } from "../inputs/VerificationSettingUpdateManyMutationInput";

@TypeGraphQL.InputType("VerificationSettingUpdateManyWithWhereWithoutGuildInput", {
  isAbstract: true
})
export class VerificationSettingUpdateManyWithWhereWithoutGuildInput {
  @TypeGraphQL.Field(_type => VerificationSettingScalarWhereInput, {
    nullable: false
  })
  where!: VerificationSettingScalarWhereInput;

  @TypeGraphQL.Field(_type => VerificationSettingUpdateManyMutationInput, {
    nullable: false
  })
  data!: VerificationSettingUpdateManyMutationInput;
}
