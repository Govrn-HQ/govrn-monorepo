import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingWhereInput } from "../inputs/VerificationSettingWhereInput";

@TypeGraphQL.InputType("VerificationSettingRelationFilter", {
  isAbstract: true
})
export class VerificationSettingRelationFilter {
  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  is?: VerificationSettingWhereInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  isNot?: VerificationSettingWhereInput | undefined;
}
