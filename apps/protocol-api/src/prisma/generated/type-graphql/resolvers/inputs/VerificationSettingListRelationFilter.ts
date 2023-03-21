import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingWhereInput } from "../inputs/VerificationSettingWhereInput";

@TypeGraphQL.InputType("VerificationSettingListRelationFilter", {
  isAbstract: true
})
export class VerificationSettingListRelationFilter {
  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  every?: VerificationSettingWhereInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  some?: VerificationSettingWhereInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingWhereInput, {
    nullable: true
  })
  none?: VerificationSettingWhereInput | undefined;
}
