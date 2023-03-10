import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsWhereInput } from "../inputs/VerificationSettingsWhereInput";

@TypeGraphQL.InputType("VerificationSettingsListRelationFilter", {
  isAbstract: true
})
export class VerificationSettingsListRelationFilter {
  @TypeGraphQL.Field(_type => VerificationSettingsWhereInput, {
    nullable: true
  })
  every?: VerificationSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsWhereInput, {
    nullable: true
  })
  some?: VerificationSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsWhereInput, {
    nullable: true
  })
  none?: VerificationSettingsWhereInput | undefined;
}
